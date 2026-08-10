import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappService } from '../../services/whatsapp.service';

interface BatteryCategory {
  id: string;
  title: string;
  tag: string;
  image: string;
  specs: string[];
  brands: string[];
}

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html'
})
export class CatalogComponent {
  readonly whatsapp = inject(WhatsappService);

  readonly categories: BatteryCategory[] = [
    {
      id: 'sedan',
      title: 'Autos y Sedanes',
      tag: 'Urbano',
      image: '/images/car_sedan.png',
      specs: ['Libre de mantenimiento sellada', 'Larga vida útil', 'Garantía hasta 18 meses'],
      brands: ['Bosch S4', 'Etna Platinum', 'Varta Blue', 'Record']
    },
    {
      id: 'suv',
      title: 'SUV y Camionetas',
      tag: 'SUV & 4x4',
      image: '/images/car_suv.png',
      specs: ['Alto poder de arranque (CCA)', 'Soporte para accesorios', 'Garantía hasta 24 meses'],
      brands: ['Bosch S5', 'Varta Silver', 'Etna AR']
    },
    {
      id: 'heavy',
      title: 'Heavy Duty',
      tag: 'Pesados',
      image: '/images/truck_heavy.png',
      specs: ['Placas reforzadas antivibración', 'Ciclos profundos', 'Precios por flota'],
      brands: ['Record Heavy', 'Moura Commercial']
    }
  ];
}
