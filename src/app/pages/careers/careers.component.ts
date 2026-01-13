import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollAnimationDirective } from '../../scroll-animation.directive';

@Component({
  selector: 'app-careers',
  imports: [CommonModule, RouterModule, ScrollAnimationDirective],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {
}
