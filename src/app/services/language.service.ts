import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang = new BehaviorSubject<string>('en');
  currentLang$ = this.currentLang.asObservable();

  constructor(private translate: TranslateService) {
    // Available languages
    translate.addLangs(['en', 'es']);
    
    // Set default language
    translate.setDefaultLang('en');

    // Try to use browser language if available, otherwise use English
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang && ['en', 'es'].includes(browserLang) ? browserLang : 'en');
    this.currentLang.next(translate.currentLang);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang.next(lang);
  }

  getCurrentLang(): string {
    return this.currentLang.value;
  }
}