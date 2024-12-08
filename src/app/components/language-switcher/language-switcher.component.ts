import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="relative inline-block text-left">
      <button
        (click)="toggleDropdown()"
        class="inline-flex items-center justify-center space-x-1 text-sm font-medium text-gray-700 hover:text-blue-600 focus:outline-none"
        type="button"
      >
        <span>{{ currentLang.toUpperCase() }}</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        *ngIf="isOpen"
        class="absolute z-50 right-0 mt-2 w-24 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
      >
        <div class="py-1">
          <button
            *ngFor="let lang of languages"
            (click)="selectLanguage(lang)"
            class="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50"
            [class.font-medium]="lang === currentLang"
          >
            {{ lang.toUpperCase() }}
          </button>
        </div>
      </div>
    </div>
  `
})
export class LanguageSwitcherComponent {
  languages = ['en', 'es'];
  currentLang = 'en';
  isOpen = false;

  constructor(private languageService: LanguageService) {
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('app-language-switcher')) {
      this.isOpen = false;
    }
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectLanguage(lang: string) {
    this.languageService.switchLanguage(lang);
    this.isOpen = false;
  }
}