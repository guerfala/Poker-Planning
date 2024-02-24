import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { HomeComponent } from './home/home.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { TableRoomComponent } from './table-room/table-room.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'rooms', component: TableRoomComponent},
  {path: 'create', component: CreateRoomComponent},
  {path: 'home', component: HomeComponent},
  {path: 'updateRoom/:id', component: UpdateRoomComponent},
  {path: 'room/:id', component: RoomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
