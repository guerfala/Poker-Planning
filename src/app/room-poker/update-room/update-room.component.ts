import { Component } from '@angular/core';
import { RoomService } from '../Services/room.service';
import { Room } from '../Models/room';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrl: './update-room.component.css'
})
export class UpdateRoomComponent {

  id!: number;
  room: Room = new Room();

  constructor(private roomService: RoomService,
    private route: ActivatedRoute,
    private router: Router){}

    ngOnInit(): void {

      this.id = this.route.snapshot.params['id'];

      this.roomService.getRoomById(this.id).subscribe(data =>{
        this.room = data;
      });
    }

    onSubmit(){
      this.roomService.updateRoom(this.id, this.room)
        .subscribe(data =>{
          this.goToRoomList();
        },error => console.log(error));
    }

    goToRoomList(){
      this.router.navigate(['/rooms']);
    }

}
