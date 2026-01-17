import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { SafetyComponent } from './pages/safety/safety.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { WhyAhiDetailComponent } from './pages/why-ahi-detail/why-ahi-detail.component';

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
  },
  {
    path: 'why-ahi/:slug',
    component: WhyAhiDetailComponent
  },
  {
    path: 'safety',
    component: SafetyComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: 'careers',
    component: CareersComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  }
];
