import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AccessibilityService,
  FontSizeOption,
  ColorVisionMode
} from '../../services/accessibility.service';

interface FontSizeItem {
  value: FontSizeOption;
  label: string;
  badge: string;
  previewClass: string;
}

interface ColorModeItem {
  id: ColorVisionMode;
  name: string;
  desc: string;
  color: string;
}

@Component({
  selector: 'app-accessibility-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accessibility-widget.component.html'
})
export class AccessibilityWidgetComponent {
  readonly a11y = inject(AccessibilityService);

  readonly fontSizes: FontSizeItem[] = [
    { value: '75',  label: '75%',  badge: 'A-', previewClass: 'text-xs' },
    { value: '100', label: '100%', badge: 'A',  previewClass: 'text-sm' },
    { value: '125', label: '125%', badge: 'A+', previewClass: 'text-base font-bold' },
    { value: '150', label: '150%', badge: 'A++',previewClass: 'text-lg font-extrabold' }
  ];

  readonly colorModes: ColorModeItem[] = [
    { id: 'normal',        name: 'Normal',         desc: 'Predeterminado',       color: '#0284c7' },
    { id: 'protanopia',    name: 'Protanopía',     desc: 'Déficit de rojo',      color: '#f59e0b' },
    { id: 'deuteranopia',  name: 'Deuteranopía',   desc: 'Déficit de verde',     color: '#10b981' },
    { id: 'tritanopia',    name: 'Tritanopía',     desc: 'Déficit de azul',      color: '#8b5cf6' },
    { id: 'high-contrast', name: 'Alto Contraste', desc: 'Negro y amarillo',     color: '#000000' },
    { id: 'monochrome',    name: 'Monocromático',  desc: 'Escala de grises',     color: '#64748b' },
    { id: 'inverted',      name: 'Modo Invertido', desc: 'Inversión de color',   color: '#4f46e5' }
  ];

  setFontSize(val: FontSizeOption) {
    this.a11y.setFontSize(val);
  }

  setColorMode(mode: ColorVisionMode) {
    this.a11y.setColorMode(mode);
  }

  resetAll() {
    this.a11y.resetAll();
  }

  close() {
    this.a11y.isOpen.set(false);
  }
}
