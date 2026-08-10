import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccessibilityWidgetComponent } from './components/accessibility-widget/accessibility-widget.component';
import { FloatingWhatsappComponent } from './components/floating-whatsapp/floating-whatsapp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    BrandsComponent,
    CatalogComponent,
    WhyUsComponent,
    QuoteFormComponent,
    FaqComponent,
    FooterComponent,
    AccessibilityWidgetComponent,
    FloatingWhatsappComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Zeraus Baterías';
}
