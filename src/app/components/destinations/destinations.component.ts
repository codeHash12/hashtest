import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="relative group cursor-pointer">
            <img src="https://www.welcomepickups.com/static/destinations/rome-default.webp" alt="Rome" class="w-full h-64 object-cover rounded-lg">
            <div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg">
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-xl font-semibold">Rome</h3>
                <p>Italy</p>
              </div>
            </div>
          </div>
          <div class="relative group cursor-pointer">
            <img src="https://www.welcomepickups.com/static/destinations/paris-default.webp" alt="Paris" class="w-full h-64 object-cover rounded-lg">
            <div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg">
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-xl font-semibold">Paris</h3>
                <p>France</p>
              </div>
            </div>
          </div>
          <div class="relative group cursor-pointer">
            <img src="https://www.welcomepickups.com/static/destinations/barcelona-default.webp" alt="Barcelona" class="w-full h-64 object-cover rounded-lg">
            <div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg">
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-xl font-semibold">Barcelona</h3>
                <p>Spain</p>
              </div>
            </div>
          </div>
          <div class="relative group cursor-pointer">
            <img src="https://www.welcomepickups.com/static/destinations/athens-default.webp" alt="Athens" class="w-full h-64 object-cover rounded-lg">
            <div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg">
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-xl font-semibold">Athens</h3>
                <p>Greece</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class DestinationsComponent {}