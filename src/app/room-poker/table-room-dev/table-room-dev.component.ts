import { Component } from '@angular/core';
import { Room } from '../Models/room';
import { RoomService } from '../Services/room.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-room',
  templateUrl: './table-room-dev.component.html',
  styleUrl: './table-room-dev.component.css'
})
export class TableRoomDevComponent {

  roomList!: Room[];
  rooms!: Room[];
  dataSource:any;
  displayedColumns = ['roomId','roomName','description','actions'];

  userId1 = 1;
  userID2 = 2;

  constructor(private roomService: RoomService, private router: Router){
    this.roomService.getRoomList()
    .subscribe(res => {
      this.roomList = res;
      this.dataSource = new MatTableDataSource<Room>(this.roomList);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getRooms(){
    this.roomService.getRoomList().subscribe(data =>{
      this.rooms = data;
    })
  }

  joinChat(id:number){
    this.router.navigate(['chat', id]);
  }

  joinRoom(){
    this.router.navigate(['vstart']);
  }

}
