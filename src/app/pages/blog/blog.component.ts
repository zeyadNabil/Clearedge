import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BlogDataService, BlogPost } from '../../services/blog-data.service';
import { ScrollAnimationDirective } from '../../scroll-animation.directive';

@Component({
  selector: 'app-blog',
  imports: [CommonModule, RouterModule, FormsModule, ScrollAnimationDirective],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';
  searchQuery: string = '';
  filteredPosts: BlogPost[] = [];

  constructor(private blogDataService: BlogDataService) {}

  ngOnInit() {
    this.blogPosts = this.blogDataService.getAllBlogPosts();
    this.categories = this.blogDataService.getCategories();
    this.filteredPosts = this.blogPosts;
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.applyFilters();
  }

  onSearchChange() {
    this.applyFilters();
  }

  applyFilters() {
    let posts = this.blogPosts;

    // Apply category filter
    if (this.selectedCategory !== 'All') {
      posts = this.blogDataService.getBlogPostsByCategory(this.selectedCategory);
    }

    // Apply search filter
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase().trim();
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      );
    }

    this.filteredPosts = posts;
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
