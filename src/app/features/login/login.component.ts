import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/services/auth.service';
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
    private readonly router: Router,
  ) {}

  requestOtp() {
    this.error = '';
    this.status = '';

    try {
      this.authService.requestOtp(this.email);
      this.step = 'otp';
      this.status = 'OTP generated. In this local build, use the development code shown below.';
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
    return error instanceof Error ? error.message : 'Something went wrong.';
  }
}
