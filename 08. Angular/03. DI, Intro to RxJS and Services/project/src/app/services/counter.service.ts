import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private count = 0;

  getCount(): number {
    return this.count;
  }

  increment(): void {
    this.count++;
    console.log('increment: ' + this.count);
  }

  decrement(): void {
    this.count--;
    console.log('decrement: ' + this.count);
  }

  reset(): void {
    this.count = 0;
    console.log('reset complete');
  }
}
