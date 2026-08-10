import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type FontSizeOption = '75' | '100' | '125' | '150';
export type ColorVisionMode =
  | 'normal'
  | 'protanopia'
  | 'deuteranopia'
  | 'tritanopia'
  | 'high-contrast'
  | 'monochrome'
  | 'inverted';

@Injectable({ providedIn: 'root' })
export class AccessibilityService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  readonly isOpen = signal<boolean>(false);
  readonly fontSize = signal<FontSizeOption>('100');
  readonly dyslexiaFont = signal<boolean>(false);
  readonly colorMode = signal<ColorVisionMode>('normal');

  constructor() {
    if (this.isBrowser) {
      this.loadPrefs();
      effect(() => {
        this.applyAll();
        this.savePrefs();
      });
    }
  }

  togglePanel()                          { this.isOpen.update(v => !v); }
  setFontSize(s: FontSizeOption)         { this.fontSize.set(s); }
  toggleDyslexiaFont()                   { this.dyslexiaFont.update(v => !v); }
  setColorMode(m: ColorVisionMode)       { this.colorMode.set(m); }
  resetAll() {
    this.fontSize.set('100');
    this.dyslexiaFont.set(false);
    this.colorMode.set('normal');
  }

  private applyAll() {
    if (!this.isBrowser) return;

    const html = document.documentElement;
    const body = document.body;
    // Target for color filters — keeps a11y widget outside filter scope
    const main = document.getElementById('main-content');

    // --- Font size on <html> (triggers CSS transition) ---
    ['font-size-75','font-size-100','font-size-125','font-size-150']
      .forEach(c => html.classList.remove(c));
    html.classList.add(`font-size-${this.fontSize()}`);

    // --- Dyslexia on body ---
    body.classList.toggle('mode-dyslexia', this.dyslexiaFont());

    // --- Color filters on #main-content only ---
    if (main) {
      [
        'mode-protanopia','mode-deuteranopia','mode-tritanopia',
        'mode-high-contrast','mode-monochrome','mode-inverted'
      ].forEach(c => main.classList.remove(c));

      if (this.colorMode() !== 'normal') {
        main.classList.add(`mode-${this.colorMode()}`);
      }
    }
  }

  private savePrefs() {
    if (!this.isBrowser) return;
    try {
      localStorage.setItem('zeraus_a11y', JSON.stringify({
        fontSize: this.fontSize(),
        dyslexia: this.dyslexiaFont(),
        colorMode: this.colorMode()
      }));
    } catch {}
  }

  private loadPrefs() {
    if (!this.isBrowser) return;
    try {
      const raw = localStorage.getItem('zeraus_a11y');
      if (!raw) return;
      const p = JSON.parse(raw);
      if (p.fontSize)  this.fontSize.set(p.fontSize);
      if (p.dyslexia != null) this.dyslexiaFont.set(p.dyslexia);
      if (p.colorMode) this.colorMode.set(p.colorMode);
    } catch {}
  }
}
