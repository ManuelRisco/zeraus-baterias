import { Component, signal, inject, HostListener, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AccessibilityService } from '../../services/accessibility.service';
import { WhatsappService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  readonly a11y = inject(AccessibilityService);
  readonly whatsapp = inject(WhatsappService);
  private platformId = inject(PLATFORM_ID);

  readonly mobileMenuOpen = signal<boolean>(false);
  readonly scrolled       = signal<boolean>(false);
  readonly activeSection  = signal<string>('');

  @HostListener('window:scroll')
  onScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.scrolled.set(window.scrollY > 20);
    }
  }

  readonly navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Catálogo',  href: '#catalogo'  },
    { label: 'Nosotros',  href: '#nosotros'  },
    { label: 'FAQ',       href: '#faq'        }
  ];

  navigateTo(href: string) {
    this.activeSection.set(href);
    this.mobileMenuOpen.set(false);

    if (isPlatformBrowser(this.platformId)) {
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  toggleMobileMenu() { this.mobileMenuOpen.update(v => !v); }

  callEmergencyWhatsApp() {
    this.mobileMenuOpen.set(false);
    this.whatsapp.openEmergencyDispatch();
  }
}
