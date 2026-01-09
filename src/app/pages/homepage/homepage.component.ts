import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../scroll-animation.directive';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  services = [
    {
      title: 'Commercial Cleaning',
      description: 'Professional cleaning services for offices and commercial spaces',
      icon: '🏢'
    },
    {
      title: 'Green Cleaning',
      description: 'Eco-friendly cleaning solutions for a healthier environment',
      icon: '🌿'
    },
    {
      title: 'Specialized Services',
      description: 'Customized cleaning solutions for your specific needs',
      icon: '✨'
    },
    {
      title: 'Quality Assurance',
      description: 'Certified professionals ensuring the highest standards',
      icon: '✅'
    }
  ];

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

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
