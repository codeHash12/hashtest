import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="order-summary">
      <h3>Order Summary</h3>
      <div class="trip-details">
        <div class="date-time">
          <span>7 January, Tue</span>
          <span class="time">10:00</span>
          <a href="#" class="edit-link">Edit</a>
        </div>
        
        <div class="location-details">
          <div class="location from">
            <strong>Madrid-Barajas A. Suarez International Airport (MAD)</strong>
            <span>Madrid Airport, Spain</span>
          </div>
          <div class="location to">
            <strong>Atocha Train Station</strong>
            <span>Plaza Emperador Carlos V, 28045 Madrid, Spain</span>
          </div>
        </div>

        <div class="trip-info">
          <span><i class="fas fa-car"></i> Sedan</span>
          <span><i class="fas fa-user"></i> 1</span>
          <span><i class="fas fa-suitcase"></i> 1</span>
        </div>
      </div>

      <div class="price-details">
        <div class="total">
          <span>Total price</span>
          <span class="amount">€42</span>
        </div>
        <span class="taxes">Taxes & fees included</span>
      </div>

      <div class="benefits">
        <h4>Book now and be flexible</h4>
        <ul>
          <li>
            <i class="fas fa-check"></i>
            Modify your dates & times, at anytime for free
          </li>
          <li>
            <i class="fas fa-check"></i>
            Secure this price now; prices may change soon
          </li>
          <li>
            <i class="fas fa-check"></i>
            Easily add more guests to your booking anytime
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .order-summary {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    h3 {
      font-size: 20px;
      margin-bottom: 1.5rem;
      color: #333;
    }

    .trip-details {
      border-bottom: 1px solid #eee;
      padding-bottom: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .date-time {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .time {
      font-weight: 600;
    }

    .edit-link {
      color: #00C99C;
      text-decoration: none;
      margin-left: auto;
    }

    .location-details {
      margin-bottom: 1rem;
    }

    .location {
      margin-bottom: 1rem;
    }

    .location strong {
      display: block;
      margin-bottom: 0.25rem;
    }

    .location span {
      color: #666;
      font-size: 14px;
    }

    .trip-info {
      display: flex;
      gap: 1.5rem;
      color: #666;
    }

    .trip-info i {
      margin-right: 0.5rem;
      color: #333;
    }

    .price-details {
      margin-bottom: 1.5rem;
    }

    .total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    .amount {
      font-size: 24px;
      font-weight: 600;
      color: #00C99C;
    }

    .taxes {
      color: #666;
      font-size: 14px;
    }

    .benefits {
      background: #f8f9fa;
      padding: 1.5rem;
      border-radius: 4px;
    }

    .benefits h4 {
      margin-bottom: 1rem;
    }

    .benefits ul {
      list-style: none;
      padding: 0;
    }

    .benefits li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
      color: #666;
    }

    .benefits i {
      color: #00C99C;
    }

    @media (max-width: 768px) {
      .order-summary {
        margin: 1rem;
      }
    }
  `]
})
export class OrderSummaryComponent {}