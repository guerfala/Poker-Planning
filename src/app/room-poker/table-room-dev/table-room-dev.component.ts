import { Component } from '@angular/core';
import { Room } from '../Models/room';
import { RoomService } from '../Services/room.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-room-dev',
  templateUrl: './table-room-dev.component.html',
  styleUrl: './table-room-dev.component.css'
})
export class TableRoomDevComponent {

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

  joinChat(id: number) {
    this.router.navigate(['chat', id]);
  }

  joinRoom() {
    this.router.navigate(['vstart']);
  }

}
