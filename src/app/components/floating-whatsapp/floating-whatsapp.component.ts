import { Component, inject } from '@angular/core';
import { WhatsappService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-floating-whatsapp',
  standalone: true,
  templateUrl: './floating-whatsapp.component.html'
})
export class FloatingWhatsappComponent {
  readonly whatsapp = inject(WhatsappService);
}
