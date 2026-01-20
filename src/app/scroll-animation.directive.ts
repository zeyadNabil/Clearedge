import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Add initial hidden state
    const element = this.el.nativeElement;
    
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a small delay for smoother animation
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, 50);
          } else {
            // Optional: Remove visible class when out of view for re-animation
            // Uncomment the next line if you want elements to re-animate when scrolling back
            // entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      this.observer.observe(element);
    }, 100);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

