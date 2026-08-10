import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WhatsappService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-quote-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quote-form.component.html'
})
export class QuoteFormComponent {
  readonly whatsapp = inject(WhatsappService);
  readonly submitted = signal<boolean>(false);

  formData = { fullName: '', phone: '', carModel: '', district: '' };

  readonly districts = [
    'Miraflores', 'San Isidro', 'Santiago de Surco', 'San Borja', 'La Molina',
    'Magdalena del Mar', 'Jesús María', 'Lince', 'Pueblo Libre', 'San Miguel',
    'Surquillo', 'Barranco', 'Chorrillos', 'Los Olivos', 'San Martín de Porres',
    'Independencia', 'Comas', 'Ate', 'Santa Anita', 'San Juan de Lurigancho',
    'San Juan de Miraflores', 'Villa El Salvador', 'Callao / Bellavista',
    'Otro distrito de Lima'
  ];

  submitQuote() {
    this.submitted.set(true);
    this.whatsapp.openCustomQuote({
      fullName: this.formData.fullName,
      phone: this.formData.phone,
      carModel: this.formData.carModel,
      district: this.formData.district,
      isUrgent: false
    });
  }
}
