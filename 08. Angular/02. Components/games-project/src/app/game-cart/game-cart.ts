import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../models/game.models';

@Component({
  selector: 'app-game-cart',
  standalone: true,
  imports: [],
  templateUrl: './game-cart.html',
  styleUrl: './game-cart.css',
})
export class GameCart {
  @Input() game!: Game;
  @Output() addToCart = new EventEmitter<Game>();

  onBuyClick() {
    this.addToCart.emit(this.game);
  }
}
