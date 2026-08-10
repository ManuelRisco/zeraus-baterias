import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html'
})
export class FaqComponent {
  readonly faqs: FaqItem[] = [
    { question: '¿Cuánto tarda en llegar el técnico?',          answer: 'En condiciones normales de Lima, el tiempo promedio es de 30 a 45 minutos.', isOpen: false },
    { question: '¿El delivery e instalación tienen algún costo?', answer: '¡No! El delivery e instalación son 100% GRATIS en Lima Metropolitana al comprar tu batería con nosotros.', isOpen: false },
    { question: '¿Reciben mi batería usada?',                    answer: 'Sí, la recibimos para reciclaje y te descontamos del precio de tu batería nueva.', isOpen: false },
    { question: '¿Qué garantía tienen las baterías?',           answer: 'De 12 a 24 meses según la marca, 100% originales con boleta/factura y certificado de garantía.', isOpen: false },
    { question: '¿Qué métodos de pago aceptan?',                answer: 'Yape, Plin, transferencias BCP/BBVA/Interbank, tarjetas Visa/Mastercard y efectivo.', isOpen: false }
  ];

  toggleFaq(i: number) { this.faqs[i].isOpen = !this.faqs[i].isOpen; }
}
