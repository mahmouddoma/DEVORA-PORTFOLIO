import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/services/auth.service';
import { I18nService } from '../../core/services/i18n.service';
import { BrandLogoComponent } from '../../shared/components/brand-logo/brand-logo.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, BrandLogoComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email = '';
  otp = '';
  step: 'email' | 'otp' = 'email';
  status = '';
  error = '';

  constructor(
    public readonly authService: AuthService,
    public readonly i18n: I18nService,
    private readonly router: Router,
  ) {}

  requestOtp() {
    this.error = '';
    this.status = '';

    try {
      this.authService.requestOtp(this.email);
      this.step = 'otp';
      this.status = this.i18n.t('login.otpGenerated');
    } catch (error) {
      this.error = this.readError(error);
    }
  }

  verifyOtp() {
    this.error = '';
    this.status = '';

    try {
      this.authService.verifyOtp(this.email, this.otp);
      void this.router.navigate(['/dashboard']);
    } catch (error) {
      this.error = this.readError(error);
    }
  }

  useAnotherEmail() {
    this.step = 'email';
    this.otp = '';
    this.status = '';
    this.error = '';
  }

  private readError(error: unknown) {
    if (!(error instanceof Error)) {
      return this.i18n.t('login.genericError');
    }

    const translationKey = this.errorTranslationKeys[error.message];
    return translationKey ? this.i18n.t(translationKey) : error.message;
  }

  private readonly errorTranslationKeys: Record<string, string> = {
    'Enter a valid email address.': 'login.error.invalidEmail',
    'Request a new OTP for this email.': 'login.error.requestNewOtp',
    'OTP expired. Request a new code.': 'login.error.expiredOtp',
    'OTP is incorrect.': 'login.error.incorrectOtp',
  };
}
