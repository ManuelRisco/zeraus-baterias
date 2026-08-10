import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  // Número de WhatsApp oficial para Lima, Perú
  private readonly phoneNumber = '51999888777';

  getPhoneDisplay(): string {
    return '+51 999 888 777';
  }

  /**
   * Abre chat de auxilio mecánico inmediato
   */
  openEmergencyDispatch(): void {
    const text = 
`⚡ *¡AUXILIO MECÁNICO URGENTE - ZERAUS BATERÍAS!* ⚡
Hola, me quedé sin batería y necesito asistencia técnica inmediata a domicilio.

📍 *Distrito / Ubicación:* [Por favor indícanos dónde estás]
🚗 *Auto / Modelo:* [Indícanos marca y modelo]

¿Cuál es el tiempo de llegada más rápido?`;

    this.openUrl(text);
  }

  /**
   * Cotización por modelo específico del catálogo
   */
  openModelQuote(modelName: string, category: string): void {
    const text = 
`🔋 *COTIZACIÓN DE BATERÍA - ZERAUS BATERÍAS*
Hola, deseo consultar el precio y disponibilidad para el siguiente vehículo/modelo:

🏷️ *Categoría:* ${category}
⚡ *Modelo / Marca solicitada:* ${modelName}

Por favor confirmar si incluye delivery e instalación gratis en mi distrito.`;

    this.openUrl(text);
  }

  /**
   * Cotización completa con datos del formulario
   */
  openCustomQuote(data: {
    fullName: string;
    phone: string;
    carModel: string;
    district: string;
    isUrgent?: boolean;
  }): void {
    const urgency = data.isUrgent ? '⚡ ¡URGENTE! (Llegada en minutos)' : '📅 Cotización regular';
    const text = 
`🚗 *SOLICITUD DE COTIZACIÓN - ZERAUS BATERÍAS*
Hola, deseo cotizar una batería con instalación a domicilio con los siguientes datos:

👤 *Cliente:* ${data.fullName || 'No especificado'}
📞 *Celular:* ${data.phone || 'No especificado'}
🚘 *Auto / Modelo / Año:* ${data.carModel || 'No especificado'}
📍 *Distrito en Lima:* ${data.district || 'Lima Metropolitana'}
⏱️ *Prioridad:* ${urgency}

Agradeceré me brinden las mejores opciones de marcas (Bosch, Varta, Etna, etc.) y descuentos dejando mi batería usada.`;

    this.openUrl(text);
  }

  /**
   * Contacto general directo
   */
  openDirectChat(customText?: string): void {
    const text = customText || 
`👋 *HOLA ZERAUS BATERÍAS*
Hola, me comunico desde la página web para solicitar información sobre baterías y servicio a domicilio en Lima.`;

    this.openUrl(text);
  }

  private openUrl(message: string): void {
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${this.phoneNumber}?text=${encoded}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }
}
