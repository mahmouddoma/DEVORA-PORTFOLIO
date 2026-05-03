import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';

interface AuthSession {
  email: string;
  expiresAt: number;
}

interface PendingOtp {
  email: string;
  otp: string;
  expiresAt: number;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly sessionStorageKey = 'devora-dashboard-session';
  private readonly otpStorageKey = 'devora-dashboard-pending-otp';
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly session = signal<AuthSession | null>(this.readSession());

  readonly email = computed(() => this.session()?.email ?? '');
  readonly isAuthenticated = computed(() => !!this.session());
  readonly lastDevOtp = signal('');

  requestOtp(email: string) {
    const normalizedEmail = email.trim().toLowerCase();
    if (!this.isValidEmail(normalizedEmail)) {
      throw new Error('Enter a valid email address.');
    }

    const otp = this.generateOtp();
    const pending: PendingOtp = {
      email: normalizedEmail,
      otp,
      expiresAt: Date.now() + 10 * 60 * 1000,
    };

    this.lastDevOtp.set(otp);

    if (this.isBrowser) {
      window.sessionStorage.setItem(this.otpStorageKey, JSON.stringify(pending));
      console.info(`[DEVORA Dashboard] OTP for ${normalizedEmail}: ${otp}`);
    }

    return otp;
  }

  verifyOtp(email: string, otp: string) {
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedOtp = otp.trim();
    const pending = this.readPendingOtp();

    if (!pending || pending.email !== normalizedEmail) {
      throw new Error('Request a new OTP for this email.');
    }

    if (pending.expiresAt <= Date.now()) {
      this.clearPendingOtp();
      throw new Error('OTP expired. Request a new code.');
    }

    if (pending.otp !== normalizedOtp) {
      throw new Error('OTP is incorrect.');
    }

    const session: AuthSession = {
      email: normalizedEmail,
      expiresAt: Date.now() + 12 * 60 * 60 * 1000,
    };

    this.session.set(session);
    this.clearPendingOtp();

    if (this.isBrowser) {
      window.localStorage.setItem(this.sessionStorageKey, JSON.stringify(session));
    }
  }

  logout() {
    this.session.set(null);
    this.clearPendingOtp();

    if (this.isBrowser) {
      window.localStorage.removeItem(this.sessionStorageKey);
    }
  }

  private readSession(): AuthSession | null {
    if (!this.isBrowser) return null;

    try {
      const stored = window.localStorage.getItem(this.sessionStorageKey);
      if (!stored) return null;

      const session = JSON.parse(stored) as AuthSession;
      if (!session.email || session.expiresAt <= Date.now()) {
        window.localStorage.removeItem(this.sessionStorageKey);
        return null;
      }

      return session;
    } catch {
      window.localStorage.removeItem(this.sessionStorageKey);
      return null;
    }
  }

  private readPendingOtp(): PendingOtp | null {
    if (!this.isBrowser) return null;

    try {
      const stored = window.sessionStorage.getItem(this.otpStorageKey);
      return stored ? (JSON.parse(stored) as PendingOtp) : null;
    } catch {
      this.clearPendingOtp();
      return null;
    }
  }

  private clearPendingOtp() {
    this.lastDevOtp.set('');

    if (this.isBrowser) {
      window.sessionStorage.removeItem(this.otpStorageKey);
    }
  }

  private generateOtp() {
    const code = Math.floor(100000 + Math.random() * 900000);
    return String(code);
  }

  private isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
