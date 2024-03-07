import { Component } from '@angular/core';
import { Room } from '../Models/room';
import { RoomService } from '../Services/room.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-room',
  templateUrl: './table-room.component.html',
  styleUrls: ['./table-room.component.css']
})
export class TableRoomComponent {

  roomList!: Room[];
  rooms!: Room[];
  dataSource: Room[] = [];
  displayedColumns = ['roomId', 'roomName', 'description', 'actions'];

  constructor(private roomService: RoomService, private router: Router) {
    this.roomService.getRoomList().subscribe(res => {
      this.roomList = res;
      this.dataSource = this.roomList;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // Assuming you want to filter on roomName
    this.dataSource = this.roomList.filter(room => room.roomName.toLowerCase().includes(filterValue.trim().toLowerCase()));
  }

  editRoom(id: number) {
    this.router.navigate(['updateRoom', id]);
  }

  deleteRoom(id: number) {
    this.roomService.deleteRoom(id).subscribe(data => {
      // Refreshing the list after deletion
      this.roomService.getRoomList().subscribe(res => {
        this.roomList = res;
        this.dataSource = this.roomList;
      });
    });
  }

  joinChat(id: number) {
    this.router.navigate(['chat', id]);
  }

  joinRoom() {
    this.router.navigate(['vstart']);
  }
}
