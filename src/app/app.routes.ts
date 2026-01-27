import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ServiceDetailComponent } from './pages/our-services/service-detail/service-detail.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { SafetyComponent } from './pages/safety/safety.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { WhyAhiDetailComponent } from './pages/why-ahi-detail/why-ahi-detail.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { LeaderDetailComponent } from './pages/leader-detail/leader-detail.component';

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
    path: 'leader/:slug',
    component: LeaderDetailComponent
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
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog/:slug',
    component: BlogDetailComponent
  }
];
