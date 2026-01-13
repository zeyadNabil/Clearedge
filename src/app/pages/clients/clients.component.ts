import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollAnimationDirective } from '../../scroll-animation.directive';

@Component({
  selector: 'app-clients',
  imports: [CommonModule, RouterModule, ScrollAnimationDirective],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  clients = [
    { name: 'Microsoft', icon: 'fab fa-microsoft' },
    { name: 'Amazon', icon: 'fab fa-amazon' },
    { name: 'Apple', icon: 'fab fa-apple' },
    { name: 'Google', icon: 'fab fa-google' },
    { name: 'IBM', icon: 'fas fa-server' },
    { name: 'Intel', icon: 'fas fa-microchip' },
    { name: 'Oracle', icon: 'fas fa-database' },
    { name: 'Cisco', icon: 'fas fa-network-wired' },
    { name: 'Dell', icon: 'fas fa-laptop' },
    { name: 'HP', icon: 'fas fa-desktop' },
    { name: 'Boeing', icon: 'fas fa-plane' },
    { name: 'General Electric', icon: 'fas fa-cogs' },
    { name: 'Walmart', icon: 'fas fa-store' },
    { name: 'Bank of America', icon: 'fas fa-university' },
    { name: 'JPMorgan Chase', icon: 'fas fa-chart-line' },
    { name: 'Verizon', icon: 'fas fa-broadcast-tower' }
  ];
}
