import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-countdown',
  imports: [],
  templateUrl: './countdown.html',
  styleUrl: './countdown.css',
})
export class CountdownComponent {
  count = signal(0);

  doubled = computed(() => this.count() * 2);
  isPositive = computed(() => this.count() > 0);

  constructor() {
    effect(() => {
      console.log('Count changed to:', this.count());
    });
    effect(() => {
      console.log('Doubled changed to:', this.doubled());
    });
  }

  increment(): void {
    this.count.update((value) => value + 1);
  }
  decrement(): void {
    this.count.update((value) => value - 1);
  }

  reset(): void {
    this.count.set(0);
  }

  setTo(value: number): void {
    this.count.set(value);
  }
}
