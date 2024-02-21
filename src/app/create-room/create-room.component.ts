import { Component } from '@angular/core';
import { Room } from '../Models/room';
import { RoomService } from '../Services/room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrl: './create-room.component.css'
})
export class CreateRoomComponent {

  room: Room = new Room();
  constructor(private roomService: RoomService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveRoom(){
    this.roomService.createRoom(this.room).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));
    this.router.navigate(['/room']);
  }

  goToRoomList(){
    this.router.navigate(['/room']);
  }

  onSubmit(){
    console.log(this.room);
    this.saveRoom();
    this.router.navigate(['/room']);
  }

}
