import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'booking-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <div class="logo">
        <img src="https://traveler.welcomepickups.com/assets/logo-default.svg" alt="Welcome Pickups">
      </div>
      <div class="progress-steps">
        <div class="step active">
          <span class="step-number">1</span>
          <span class="step-text">QUOTE</span>
        </div>
        <div class="step active">
          <span class="step-number">2</span>
          <span class="step-text">TRANSFER</span>
        </div>
        <div class="step">
          <span class="step-number">3</span>
          <span class="step-text">PAYMENT</span>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      padding: 1rem;
      background: white;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo img {
      height: 32px;
    }

    .progress-steps {
      display: flex;
      gap: 1rem;
    }

    .step {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #999;
    }

    .step.active {
      color: #00C99C;
    }

    .step-number {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 2px solid currentColor;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
    }

    .step-text {
      font-size: 12px;
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .header {
        flex-direction: column;
        gap: 1rem;
      }
    }
  `]
})
export class BookingHeaderComponent {}