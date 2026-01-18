import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ServiceDataService, ServiceDetail } from '../../../services/service-data.service';
import { ScrollAnimationDirective } from '../../../scroll-animation.directive';

@Component({
  selector: 'app-service-detail',
  imports: [CommonModule, RouterModule, ScrollAnimationDirective],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css'
})
export class ServiceDetailComponent implements OnInit {
  service: ServiceDetail | undefined;
  slug: string = '';

  constructor(
    private route: ActivatedRoute,
    private serviceDataService: ServiceDataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.service = this.serviceDataService.getServiceBySlug(this.slug);
    });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  isAssistedLivingService(): boolean {
    return this.service?.slug === 'assisted-living-services';
  }

  isMedicalHealthcareService(): boolean {
    return this.service?.slug === 'medical-healthcare-solutions';
  }

  isRetailFacilityService(): boolean {
    return this.service?.slug === 'retail-facility-services';
  }
}
