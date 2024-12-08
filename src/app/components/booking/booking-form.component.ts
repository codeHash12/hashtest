import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="booking-form">
      <h2>Booking Details</h2>
      
      <div class="flight-number">
        <label>Flight number</label>
        <div class="search-input">
          <input type="text" placeholder="Find my flight">
          <i class="fas fa-search"></i>
        </div>
      </div>

      <div class="passenger-type">
        <div class="radio-group">
          <input type="radio" id="mainPassenger" name="passengerType" checked>
          <label for="mainPassenger">I'm the main passenger</label>
        </div>
        <div class="radio-group">
          <input type="radio" id="otherPerson" name="passengerType">
          <label for="otherPerson">This booking is for another person</label>
        </div>
      </div>

      <div class="form-group">
        <label>Your full name</label>
        <input type="text" placeholder="Enter your full name">
      </div>

      <div class="form-group">
        <label>Your email</label>
        <input type="email" placeholder="Enter your email">
      </div>

      <div class="form-group">
        <label>Your phone number</label>
        <div class="phone-input">
          <div class="country-code">
            <img src="https://flagcdn.com/w20/es.png" alt="ES">
            <span>+34</span>
          </div>
          <input type="tel" placeholder="e.g., 612 34 56 78">
        </div>
      </div>

      <div class="checkbox-group">
        <input type="checkbox" id="updates" checked>
        <label for="updates">I agree to receive status updates via email & sms</label>
      </div>

      <div class="additional-options">
        <div class="option">
          <input type="checkbox" id="childSeats">
          <label for="childSeats">Add child seats</label>
        </div>
        <div class="option">
          <input type="checkbox" id="notes">
          <label for="notes">Add notes for the driver</label>
          <span class="hint">Bulky luggage, wheelchair, etc.</span>
        </div>
      </div>

      <button class="continue-btn">Continue</button>
    </div>
  `,
  styles: [`
    .booking-form {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      max-width: 600px;
      margin: 0 auto;
    }

    h2 {
      font-size: 24px;
      margin-bottom: 2rem;
      color: #333;
    }

    .flight-number {
      margin-bottom: 2rem;
    }

    .search-input {
      position: relative;
    }

    .search-input input {
      width: 100%;
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding-right: 40px;
    }

    .search-input i {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: #999;
    }

    .passenger-type {
      margin-bottom: 2rem;
    }

    .radio-group {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      color: #666;
    }

    .form-group input {
      width: 100%;
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    .phone-input {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .country-code {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      min-width: 100px;
    }

    .checkbox-group {
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .additional-options {
      margin-bottom: 2rem;
    }

    .option {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .hint {
      font-size: 12px;
      color: #999;
      margin-left: 0.5rem;
    }

    .continue-btn {
      width: 100%;
      padding: 1rem;
      background: #00C99C;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .continue-btn:hover {
      background: #00b38b;
    }

    @media (max-width: 768px) {
      .booking-form {
        padding: 1rem;
        margin: 1rem;
      }
    }
  `]
})
export class BookingFormComponent {}