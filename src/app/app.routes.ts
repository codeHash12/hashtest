import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { BookingComponent } from './components/booking/booking.component';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'booking', component: BookingComponent },
  { path: '**', redirectTo: '' },
];
