import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogDataService, BlogPost } from '../../services/blog-data.service';
import { ScrollAnimationDirective } from '../../scroll-animation.directive';

@Component({
  selector: 'app-blog-detail',
  imports: [CommonModule, RouterModule, ScrollAnimationDirective],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent implements OnInit {
  blogPost: BlogPost | undefined;
  relatedPosts: BlogPost[] = [];
  slug: string = '';

  constructor(
    private route: ActivatedRoute,
    private blogDataService: BlogDataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.blogPost = this.blogDataService.getBlogPostBySlug(this.slug);
      if (this.blogPost) {
        // Get related posts (same category, excluding current post)
        this.relatedPosts = this.blogDataService.getBlogPostsByCategory(this.blogPost.category)
          .filter(post => post.slug !== this.slug)
          .slice(0, 3);
      }
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
}
