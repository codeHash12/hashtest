import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  template: `
    <section class="relative min-h-[600px] md:min-h-[800px] bg-cover bg-center" style="background-image: url('https://www.welcomepickups.com/static/home/hero-default.webp')">
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
      <div class="relative container mx-auto px-4 h-full flex items-center pt-32">
        <div class="w-full md:w-[480px]">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {{ 'hero.title' | translate }}
          </h1>
          <p class="text-xl text-white mb-8 opacity-90">{{ 'hero.subtitle' | translate }}</p>
          
          <div class="bg-white rounded-2xl p-6 shadow-xl">
            <div class="space-y-4">
              <div class="relative">
                <input type="text" 
                  class="w-full p-4 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500" 
                  [placeholder]="'hero.form.cityPlaceholder' | translate">
              </div>
              
              <div class="relative">
                <input type="text" 
                  class="w-full p-4 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500" 
                  [placeholder]="'hero.form.fromPlaceholder' | translate">
              </div>
              
              <div class="relative">
                <input type="text" 
                  class="w-full p-4 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500" 
                  [placeholder]="'hero.form.toPlaceholder' | translate">
              </div>
              
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <input type="date" 
                    class="w-full p-4 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-blue-500">
                </div>
                <div>
                  <input type="time" 
                    class="w-full p-4 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-blue-500">
                </div>
              </div>
              
              <div class="grid grid-cols-2 gap-4">
                <div class="relative">
                  <div class="flex items-center border border-gray-200 rounded-xl">
                    <button class="px-4 py-3 text-gray-500 hover:text-gray-700">-</button>
                    <input type="number" 
                      class="w-full p-3 text-center border-none focus:outline-none text-gray-800"
                      min="1" 
                      value="1">
                    <button class="px-4 py-3 text-gray-500 hover:text-gray-700">+</button>
                  </div>
                </div>
                <div class="relative">
                  <div class="flex items-center border border-gray-200 rounded-xl">
                    <button class="px-4 py-3 text-gray-500 hover:text-gray-700">-</button>
                    <input type="number" 
                      class="w-full p-3 text-center border-none focus:outline-none text-gray-800"
                      min="1" 
                      value="1">
                    <button class="px-4 py-3 text-gray-500 hover:text-gray-700">+</button>
                  </div>
                </div>
              </div>
              
              <button class="w-full bg-emerald-400 text-white py-4 rounded-xl hover:bg-emerald-500 transition-colors font-medium text-lg" (click)="navigateToBooking()">
                {{ 'hero.form.continue' | translate }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .home-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      gap: 20px;
    }
  `,
  ],
})
export class HeroComponent {
  passengers = 1;
  luggage = 1;
  constructor(private router: Router) {}

  increment(type: 'passengers' | 'luggage') {
    if (type === 'passengers') {
      this.passengers++;
    } else {
      this.luggage++;
    }
  }
  navigateToBooking() {
    this.router.navigate(['/booking']);
  }
  decrement(type: 'passengers' | 'luggage') {
    if (type === 'passengers' && this.passengers > 1) {
      this.passengers--;
    } else if (type === 'luggage' && this.luggage > 1) {
      this.luggage--;
    }
  }
}
