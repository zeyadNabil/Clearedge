import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceDataService, ServiceDetail } from '../../services/service-data.service';
import { WhyAhiDataService, WhyAhiPage } from '../../services/why-ahi-data.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  services: ServiceDetail[] = [];
  whyAhiPages: WhyAhiPage[] = [];

  constructor(
    private serviceDataService: ServiceDataService,
    private whyAhiDataService: WhyAhiDataService
  ) {}

  ngOnInit() {
    this.services = this.serviceDataService.getAllServices();
    this.whyAhiPages = this.whyAhiDataService.getAllPages();
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
