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

  rooms!: Room[];

  constructor(private roomService: RoomService, private router: Router){}

  ngOnInit(): void{
    this.getRooms();
  }

  getRooms(){
    this.roomService.getRoomList().subscribe(data =>{
      this.rooms = data;
    })
  }

  updateRoom(id: number){
    this.router.navigate(['updateRoom', id]);
  }

  deleteRoom(id:number){
    this.roomService.deleteRoom(id).subscribe(data => {
      this.getRooms();
    })
  }

}
