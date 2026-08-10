import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-us.component.html'
})
export class WhyUsComponent {
  readonly whatsapp = inject(WhatsappService);
}
