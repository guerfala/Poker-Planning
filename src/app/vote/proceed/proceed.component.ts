import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-proceed',
  templateUrl: './proceed.component.html',
  styleUrl: './proceed.component.css'
})
export class ProceedComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }

}
