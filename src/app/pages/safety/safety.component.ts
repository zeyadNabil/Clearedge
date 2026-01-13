import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollAnimationDirective } from '../../scroll-animation.directive';

@Component({
  selector: 'app-safety',
  imports: [CommonModule, RouterModule, ScrollAnimationDirective],
  templateUrl: './safety.component.html',
  styleUrl: './safety.component.css'
})
export class SafetyComponent {
  safetyItems = [
    'Accident Investigation',
    'Accident Prevention',
    'Blood Borne Pathogens',
    'Confined Space',
    'Documentation of Near Misses',
    'Driving Defensively',
    'Electrical Hazards',
    'Emergency Notification',
    'Fire Prevention',
    'Forklift and Pedestrian Safety',
    'Hand Tool Safety',
    'Hand Trucks and Dollies',
    'Hazardous Communication',
    'Injury / Illness Prevention',
    'Loading Dock Safety',
    'Ladders',
    'Lockout/Tagout',
    'Machine Safeguarding',
    'Natural Disaster Training',
    'Personal Protection',
    'Personal Protection Equip.',
    'Pinch Points',
    'Portable Power Tools',
    'Safe Lifting Techniques',
    'Sexual Harassment Training',
    'Slips, Trips, and Falls',
    'Substance Abuse',
    'Violence in the Workplace',
    'Warehouse Safety',
    'Weather Safety'
  ];
}
