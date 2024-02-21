import { Component } from '@angular/core';
import { Room } from '../Models/room';
import { RoomService } from '../Services/room.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-room',
  templateUrl: './table-room.component.html',
  styleUrl: './table-room.component.css'
})
export class TableRoomComponent {

  roomList!: Room[];
  dataSource:any;
  displayedColumns = ['roomId','roomName','description'];

  constructor(private roomService: RoomService){
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

}
