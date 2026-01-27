import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ScrollAnimationDirective } from '../../scroll-animation.directive';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, RouterModule, FormsModule, ScrollAnimationDirective],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  onSubmit() {
    // Open mail provider with pre-filled information
    const subject = encodeURIComponent('Contact Form Submission from ' + this.contactForm.name);
    const body = encodeURIComponent(
      `Name: ${this.contactForm.name}\n` +
      `Email: ${this.contactForm.email}\n` +
      `Phone: ${this.contactForm.phone || 'Not provided'}\n\n` +
      `Message:\n${this.contactForm.message}`
    );
    
    window.location.href = `mailto:support@clearedge.com?subject=${subject}&body=${body}`;
    
    // Reset form after opening mail client
    this.contactForm = { name: '', email: '', phone: '', message: '' };
  }
}
