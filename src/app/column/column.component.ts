// column.component.ts

import { Component, Input } from '@angular/core';
import { Card } from '../card/card.model'; // Import the Card model

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent {
  @Input() columnName: string = '';
  @Input() cards: Card[] = [];
}
