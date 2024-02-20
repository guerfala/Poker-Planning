import { Component } from '@angular/core';
import { Room } from '../Models/room/room';
import { RoomService } from '../Services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {

  rooms!: Room[];

  constructor(private roomService: RoomService){}

  ngOnInit(): void{
    this.getRooms();
  }

  private getRooms(){
    this.roomService.getRoomList().subscribe(data =>{
      this.rooms = data;
    })
  }

}
