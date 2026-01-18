import { Component, OnInit, OnDestroy, AfterViewInit, HostListener, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { ServiceDataService, ServiceDetail } from '../../services/service-data.service';
import { WhyAhiDataService, WhyAhiPage } from '../../services/why-ahi-data.service';

declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('navbarCollapse', { static: false }) navbarCollapse!: ElementRef;

  activeSection: string = 'home';
  currentRoute: string = '';
  services: ServiceDetail[] = [];
  whyAhiPages: WhyAhiPage[] = [];
  currentServiceSlug: string = '';
  currentWhyAhiSlug: string = '';
  isScrolled: boolean = false;
  isMobile: boolean = false;
  private resizeListener: () => void;
  private clickListener?: (event: MouseEvent) => void;
  private collapseInstance?: any;

  constructor(
    private router: Router,
    private serviceDataService: ServiceDataService,
    private whyAhiDataService: WhyAhiDataService
  ) {
    // Bind the resize listener so we can remove it later
    this.resizeListener = () => this.checkMobile();
  }

  ngOnInit() {
    this.services = this.serviceDataService.getAllServices();
    this.whyAhiPages = this.whyAhiDataService.getAllPages();
    this.currentRoute = this.router.url;
    this.updateCurrentService();
    this.updateCurrentWhyAhi();
    this.updateActiveSection();
    this.checkMobile();
    this.checkScroll();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute = this.router.url;
        this.updateCurrentService();
        this.updateCurrentWhyAhi();
        this.updateActiveSection();
        this.checkScroll();
        // Close mobile menu when route changes
        this.closeMobileMenu();
      });

    // Listen for window resize to update mobile state
    window.addEventListener('resize', this.resizeListener);
  }

  ngAfterViewInit() {
    // Wait a bit for Bootstrap to be fully loaded
    setTimeout(() => {
      // Initialize Bootstrap collapse instance
      if (this.navbarCollapse && typeof bootstrap !== 'undefined') {
        const collapseElement = this.navbarCollapse.nativeElement;
        try {
          this.collapseInstance = new bootstrap.Collapse(collapseElement, {
            toggle: false
          });
        } catch (error) {
          console.warn('Bootstrap Collapse not available:', error);
        }
      }

      // Listen for click outside to close menu
      this.clickListener = (event: MouseEvent) => {
        if (this.isMobile && this.isMenuOpen()) {
          const target = event.target as HTMLElement;
          const navbar = document.querySelector('.navbar');
          const toggler = document.querySelector('.navbar-toggler');

          // Check if click is outside navbar and not on toggler button
          if (navbar && !navbar.contains(target) && !toggler?.contains(target)) {
            this.closeMobileMenu();
          }
        }
      };

      document.addEventListener('click', this.clickListener);
    }, 100);
  }

  checkMobile() {
    // Bootstrap's lg breakpoint is 992px, so burger menu appears below that
    this.isMobile = window.innerWidth < 992;
    this.checkScroll(); // Re-check scroll state when mobile state changes
  }

  checkScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    // On mobile, always show background. On desktop, show background after scroll
    this.isScrolled = this.isMobile || scrollPosition > 50;
  }

  updateCurrentService() {
    if (this.currentRoute.startsWith('/services/')) {
      const slug = this.currentRoute.replace('/services/', '');
      this.currentServiceSlug = slug;
    } else {
      this.currentServiceSlug = '';
    }
  }

  updateCurrentWhyAhi() {
    if (this.currentRoute.startsWith('/why-ahi/')) {
      const slug = this.currentRoute.replace('/why-ahi/', '');
      this.currentWhyAhiSlug = slug;
    } else {
      this.currentWhyAhiSlug = '';
    }
  }

  isServiceActive(slug: string): boolean {
    return this.currentServiceSlug === slug;
  }

  isWhyAhiActive(slug: string): boolean {
    return this.currentWhyAhiSlug === slug;
  }

  ngOnDestroy() {
    // Remove event listeners
    window.removeEventListener('resize', this.resizeListener);
    if (this.clickListener) {
      document.removeEventListener('click', this.clickListener);
    }
  }

  isMenuOpen(): boolean {
    if (this.navbarCollapse) {
      const collapseElement = this.navbarCollapse.nativeElement;
      return collapseElement.classList.contains('show');
    }
    return false;
  }

  closeMobileMenu(): void {
    if (this.collapseInstance && this.isMenuOpen()) {
      try {
        this.collapseInstance.hide();
      } catch (error) {
        // Fallback: manually remove 'show' class
        if (this.navbarCollapse) {
          const collapseElement = this.navbarCollapse.nativeElement;
          collapseElement.classList.remove('show');
          const togglerButton = document.querySelector('.navbar-toggler');
          if (togglerButton) {
            togglerButton.setAttribute('aria-expanded', 'false');
          }
        }
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
    if (this.currentRoute === '/' || this.currentRoute === '/home') {
      this.updateActiveSection();
    }
  }

  updateActiveSection() {
    // Only update section if on homepage
    if (this.currentRoute !== '/' && this.currentRoute !== '/home') {
      return;
    }

    const sections = ['home', 'services', 'about', 'testimonials', 'contact'];
    const scrollPosition = window.scrollY + 120; // Offset for fixed navbar

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  scrollToSection(sectionId: string) {
    if (this.currentRoute === '/' || this.currentRoute === '/home') {
      this.activeSection = sectionId;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  isActive(sectionId: string): boolean {
    // Check for specific routes first
    if (sectionId === 'our-services') {
      return this.currentRoute === '/our-services';
    }
    if (this.currentRoute.startsWith('/services/')) {
      return sectionId === 'services';
    }
    if (this.currentRoute === '/our-services') {
      return sectionId === 'services';
    }
    if (sectionId === 'safety') {
      return this.currentRoute === '/safety';
    }
    if (sectionId === 'clients') {
      return this.currentRoute === '/clients';
    }
    if (sectionId === 'careers') {
      return this.currentRoute === '/careers';
    }
    if (sectionId === 'blog') {
      return this.currentRoute === '/blog' || this.currentRoute.startsWith('/blog/');
    }
    if (sectionId === 'contact' || sectionId === 'contact-us') {
      return this.currentRoute === '/contact-us';
    }
    // For 'home', only show as active if we're actually on the homepage
    if (sectionId === 'home') {
      return this.currentRoute === '/' || this.currentRoute === '/home';
    }
    // For other sections (used on homepage only), check activeSection
    return (this.currentRoute === '/' || this.currentRoute === '/home') && this.activeSection === sectionId;
  }
}
