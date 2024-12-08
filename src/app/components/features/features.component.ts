import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Why Choose Welcome Pickups</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="bg-white rounded-lg p-6 shadow-lg">
              <img src="https://www.welcomepickups.com/static/home/benefits/personalized-default.svg" alt="Personalized" class="mx-auto h-16 mb-4">
              <h3 class="text-xl font-semibold mb-2">Personalized Experience</h3>
              <p class="text-gray-600">Tailored services to meet your specific needs and preferences</p>
            </div>
          </div>
          <div class="text-center">
            <div class="bg-white rounded-lg p-6 shadow-lg">
              <img src="https://www.welcomepickups.com/static/home/benefits/local-default.svg" alt="Local" class="mx-auto h-16 mb-4">
              <h3 class="text-xl font-semibold mb-2">Local Expertise</h3>
              <p class="text-gray-600">Professional local drivers with extensive knowledge</p>
            </div>
          </div>
          <div class="text-center">
            <div class="bg-white rounded-lg p-6 shadow-lg">
              <img src="https://www.welcomepickups.com/static/home/benefits/support-default.svg" alt="Support" class="mx-auto h-16 mb-4">
              <h3 class="text-xl font-semibold mb-2">24/7 Support</h3>
              <p class="text-gray-600">Round-the-clock customer service in multiple languages</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class FeaturesComponent {}