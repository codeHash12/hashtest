import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, LanguageSwitcherComponent],
  template: `
    <header class="fixed w-full bg-white shadow-sm z-50">
      <div class="max-w-[1440px] mx-auto px-4">
        <nav class="flex items-center justify-between h-16 md:h-20">
          <!-- Logo -->
          <div class="flex items-center">
            <img src="https://www.welcomepickups.com/static/welcome-pickups-logo-default.svg" alt="Welcome Pickups" class="h-8">
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center space-x-8">
            <a href="#" class="text-gray-700 hover:text-blue-600 text-sm font-medium">{{ 'header.howItWorks' | translate }}</a>
            <a href="#" class="text-gray-700 hover:text-blue-600 text-sm font-medium">{{ 'header.destinations' | translate }}</a>
            <a href="#" class="text-gray-700 hover:text-blue-600 text-sm font-medium">{{ 'header.aboutUs' | translate }}</a>
            <a href="#" class="text-gray-700 hover:text-blue-600 text-sm font-medium">{{ 'header.partners' | translate }}</a>
          </div>

          <!-- Right Side Menu -->
          <div class="flex items-center space-x-6">
            <app-language-switcher class="hidden lg:block"></app-language-switcher>
            <button class="hidden lg:block bg-[#1a73e8] text-white px-6 py-2 rounded-full hover:bg-blue-700 text-sm font-medium">
              {{ 'header.bookNow' | translate }}
            </button>
            
            <!-- Mobile menu button -->
            <button 
              class="lg:hidden p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              (click)="toggleMobileMenu()">
              <svg 
                class="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24">
                <path 
                  *ngIf="!isMobileMenuOpen" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16"/>
                <path 
                  *ngIf="isMobileMenuOpen" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </nav>

        <!-- Mobile menu -->
        <div 
          class="lg:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out transform"
          [class.translate-x-0]="isMobileMenuOpen"
          [class.translate-x-full]="!isMobileMenuOpen">
          <div class="flex flex-col h-full">
            <div class="flex items-center justify-between p-4 border-b">
              <img src="https://www.welcomepickups.com/static/welcome-pickups-logo-default.svg" alt="Welcome Pickups" class="h-8">
              <button 
                class="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                (click)="toggleMobileMenu()">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            
            <div class="flex-1 overflow-y-auto">
              <div class="px-4 py-6 space-y-6">
                <a href="#" class="block text-lg font-medium text-gray-900">
                  {{ 'header.howItWorks' | translate }}
                </a>
                <a href="#" class="block text-lg font-medium text-gray-900">
                  {{ 'header.destinations' | translate }}
                </a>
                <a href="#" class="block text-lg font-medium text-gray-900">
                  {{ 'header.aboutUs' | translate }}
                </a>
                <a href="#" class="block text-lg font-medium text-gray-900">
                  {{ 'header.partners' | translate }}
                </a>
              </div>
            </div>
            
            <div class="p-4 border-t">
              <div class="mb-4">
                <app-language-switcher></app-language-switcher>
              </div>
              <button class="w-full bg-[#1a73e8] text-white py-3 rounded-full hover:bg-blue-700 text-sm font-medium">
                {{ 'header.bookNow' | translate }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}