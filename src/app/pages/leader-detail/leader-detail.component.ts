import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LeaderDataService, Leader } from '../../services/leader-data.service';
import { ScrollAnimationDirective } from '../../scroll-animation.directive';

@Component({
  selector: 'app-leader-detail',
  imports: [CommonModule, RouterModule, ScrollAnimationDirective],
  templateUrl: './leader-detail.component.html',
  styleUrl: './leader-detail.component.css'
})
export class LeaderDetailComponent implements OnInit {
  leader: Leader | undefined;
  slug: string = '';

  constructor(
    private route: ActivatedRoute,
    private leaderDataService: LeaderDataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.leader = this.leaderDataService.getLeaderBySlug(this.slug);
      
      // Scroll to top when route changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
