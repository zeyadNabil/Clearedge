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
    // Handle form submission
    console.log('Form submitted:', this.contactForm);
    // You can add your form submission logic here
    alert('Thank you for contacting us! We will get back to you soon.');
    this.contactForm = { name: '', email: '', phone: '', message: '' };
  }
}
