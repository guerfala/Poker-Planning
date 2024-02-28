
// column.model.ts

import { Card } from '../card/card.model'; // Import the Card model

export class Column {
  name: string;
  cards: Card[];

  constructor(name: string, cards: Card[] = []) {
    this.name = name;
    this.cards = cards;
  }
}
