import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from './room-poker/room/room.component';
import { CreateRoomComponent } from './room-poker/create-room/create-room.component';
import { HomeComponent } from './home/home.component';
import { UpdateRoomComponent } from './room-poker/update-room/update-room.component';
import { TableRoomComponent } from './room-poker/table-room/table-room.component';
import { VoteComponent } from './vote/components/vote.component';
import { VotesListComponent } from './vote/votes-list/votes-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'rooms', component: TableRoomComponent},
  {path: 'create', component: CreateRoomComponent},
  {path: 'home', component: HomeComponent},
  {path: 'updateRoom/:id', component: UpdateRoomComponent},
  {path: 'room/:id', component: RoomComponent},
  {path: 'home', component: HomeComponent},
  {path: 'v', component: VoteComponent},
  {path: 'votes', component: VotesListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
