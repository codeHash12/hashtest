import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from './app/components/header/header.component';
import { HeroComponent } from './app/components/hero/hero.component';
import { FeaturesComponent } from './app/components/features/features.component';
import { DestinationsComponent } from './app/components/destinations/destinations.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { importProvidersFrom } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    DestinationsComponent,
    FooterComponent,
    TranslateModule,
    RouterOutlet,
  ],
  template: `
  <!-- <router-outlet></router-outlet> -->
    <app-header></app-header>
    <app-hero></app-hero>
    <app-features></app-features>
    <app-destinations></app-destinations>
    <app-footer></app-footer>
  `,
})
export class App {
  name = 'Welcome Pickups Clone';
}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
  ],
});
