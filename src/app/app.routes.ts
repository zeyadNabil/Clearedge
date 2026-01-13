import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'our-services',
    component: OurServicesComponent
  },
  {
    path: 'services/:slug',
    component: ServiceDetailComponent
  },
  {
    path: 'services',
    redirectTo: 'our-services',
    pathMatch: 'full'
  }
];
