import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingHeaderComponent } from './header.component';
import { BookingFormComponent } from './booking-form.component';
import { OrderSummaryComponent } from './order-summary.component';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    CommonModule,
    BookingHeaderComponent,
    BookingFormComponent,
    OrderSummaryComponent,
  ],
  template: `
    <booking-header></booking-header>
    <div class="booking-container">
      <div class="booking-grid">
        <app-booking-form></app-booking-form>
        <app-order-summary></app-order-summary>
      </div>
    </div>
  `,
  styles: [
    `
    .booking-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .booking-grid {
      display: grid;
      grid-template-columns: 1fr 400px;
      gap: 2rem;
      align-items: start;
    }

    @media (max-width: 1024px) {
      .booking-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 768px) {
      .booking-container {
        padding: 0;
      }
    }
  `,
  ],
})
export class BookingComponent {}
