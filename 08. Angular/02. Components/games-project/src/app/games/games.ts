import { Component, OnInit, OnDestroy } from '@angular/core';
import { Game } from '../models/game.models';
import { GameCart } from '../game-cart/game-cart';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [GameCart],
  templateUrl: './games.html',
  styleUrl: './games.css',
})
export class Games implements OnInit, OnDestroy {
  games: Game[] = [];
  cart: Game[] = [];

  ngOnInit() {
    console.log('Games Component is created');

    this.games = [
      {
        id: 1,
        title: 'The Legend of Zelda',
        price: 1200,
        imageUrl: 'https://placehold.co/200x150/3f51b5/white?text=Zelda',
      },
      {
        id: 2,
        title: 'Super Mario Bros',
        price: 60,
        imageUrl: 'https://placehold.co/200x150/e91e63/white?text=Mario',
      },
      {
        id: 3,
        title: 'Pokemon Violet',
        price: 45,
        imageUrl: 'https://placehold.co/200x150/9c27b0/white?text=Pokemon',
      },
      {
        id: 4,
        title: 'Animal Crossing',
        price: 80,
        imageUrl: 'https://placehold.co/200x150/4caf50/white?text=AC',
      },
    ];
  }

  ngOnDestroy() {
    console.log('Games Component is deleted!!!');

    this.games = [];
  }

  onAddToCart(game: Game) {
    this.cart.push(game);
    console.log(`${game.title} is added to the cart`);
    console.log(this.cart);
  }
}
