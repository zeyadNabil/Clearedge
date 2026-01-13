import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServiceDataService, ServiceDetail } from '../../services/service-data.service';
import { ScrollAnimationDirective } from '../../scroll-animation.directive';

@Component({
  selector: 'app-our-services',
  imports: [CommonModule, RouterModule, FormsModule, ScrollAnimationDirective],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent implements OnInit {
  services: ServiceDetail[] = [];
  contactForm = {
    name: '',
    companyName: '',
    phone: '',
    email: ''
  };

  constructor(private serviceDataService: ServiceDataService) {}

  ngOnInit() {
    this.services = this.serviceDataService.getAllServices();
  }

  onSubmit() {
    // Handle form submission
    console.log('Form submitted:', this.contactForm);
    // You can add API call here to submit the form
    alert('Thank you for contacting us! We will get back to you soon.');
    // Reset form
    this.contactForm = {
      name: '',
      companyName: '',
      phone: '',
      email: ''
    };
  }
}
