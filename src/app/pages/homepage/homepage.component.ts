import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ScrollAnimationDirective } from '../../scroll-animation.directive';
import { ServiceDataService, ServiceDetail } from '../../services/service-data.service';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule, RouterModule, ScrollAnimationDirective],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  services: ServiceDetail[] = [];

  testimonials = [
    {
      name: 'John Smith',
      role: 'Facility Manager',
      company: 'ABC Corporation',
      text: 'Outstanding service and attention to detail. Highly recommended!',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Property Owner',
      company: 'XYZ Properties',
      text: 'Professional, reliable, and eco-friendly. Exactly what we needed.',
      rating: 5
    }
  ];

  constructor(
    private serviceDataService: ServiceDataService,
    private router: Router
  ) {}

  ngOnInit() {
    // Get all services and show the first 6 for homepage
    this.services = this.serviceDataService.getAllServices().slice(0, 6);
  }

  navigateToContact() {
    this.router.navigate(['/contact-us']);
  }

  navigateToService(slug: string) {
    this.router.navigate(['/services', slug]);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
