import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { WhyAhiDataService, WhyAhiPage } from '../../services/why-ahi-data.service';
import { ScrollAnimationDirective } from '../../scroll-animation.directive';

@Component({
  selector: 'app-why-ahi-detail',
  imports: [CommonModule, RouterModule, ScrollAnimationDirective],
  templateUrl: './why-ahi-detail.component.html',
  styleUrl: './why-ahi-detail.component.css'
})
export class WhyAhiDetailComponent implements OnInit {
  page: WhyAhiPage | undefined;
  slug: string = '';

  constructor(
    private route: ActivatedRoute,
    private whyAhiDataService: WhyAhiDataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.page = this.whyAhiDataService.getPageBySlug(this.slug);
      
      // Scroll to top when route changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
