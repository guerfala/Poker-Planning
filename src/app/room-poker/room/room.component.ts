import { Component } from '@angular/core';
import { RoomService } from '../Services/room.service';
import { Room } from '../Models/room';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {

  constructor(private roomService: RoomService, private router: Router){}

  

}
