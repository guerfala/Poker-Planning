import { Component, Input } from '@angular/core';
import { Card } from './card.model'; // Import the Card model

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  card!: Card;
}
