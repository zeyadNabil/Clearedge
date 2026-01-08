import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from './scroll-animation.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ScrollAnimationDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  activeSection: string = 'home';

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

  ngOnInit() {
    this.updateActiveSection();
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateActiveSection();
  }

  updateActiveSection() {
    const sections = ['home', 'services', 'about', 'testimonials', 'contact'];
    const scrollPosition = window.scrollY + 120; // Offset for fixed navbar

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  scrollToSection(sectionId: string) {
    this.activeSection = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  isActive(sectionId: string): boolean {
    return this.activeSection === sectionId;
  }
}
