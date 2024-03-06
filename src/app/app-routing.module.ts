import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { TableRoomComponent } from './room-poker/table-room/table-room.component';
import { CreateRoomComponent } from './room-poker/create-room/create-room.component';
import { UpdateRoomComponent } from './room-poker/update-room/update-room.component';
import { RoomComponent } from './room-poker/room/room.component';
import { ChatComponent } from './room-poker/chat/chat.component';
import { TableRoomDevComponent } from './room-poker/table-room-dev/table-room-dev.component';
import { VoteComponent } from './vote/components/vote.component';
import { VotesListComponent } from './vote/votes-list/votes-list.component';
import { VoteCompletedComponent } from './vote/user-select/user-select.component';
import { StartComponent } from './vote/start/start.component';
import { ResultComponent } from './vote/result/result.component';
import {ListPackComponent} from "./list-pack/list-pack.component";
import {ViewPackComponent} from "./view-pack/view-pack.component";



const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},

  /////////////////////////////////////////// ROOM POKER ///////////////////////////////////////////

  {path: 'rooms', component: TableRoomComponent},
  {path: 'create', component: CreateRoomComponent},
  {path: 'updateRoom/:id', component: UpdateRoomComponent},
  {path: 'room/:id', component: RoomComponent},
  {path: 'chat/:user', component: ChatComponent},
  {path: 'roomsdev', component: TableRoomDevComponent},

/////////////////////////////////////////// Vote ///////////////////////////////////////////

{path: 'vote/:userId/:taskId', component: VoteComponent},
  {path: 'votes', component: VotesListComponent},
  {path: 'vuser', component: VoteCompletedComponent},
  {path: 'vstart', component: StartComponent},
  {path: 'vresult', component: ResultComponent},

/////////////////////////////////////////// USER ///////////////////////////////////////////

  {path:  'login', component: LoginComponent },
  {path:  'userDetails', component:UserDetailsComponent},
  {path: 'updateUser/:id', component:UpdateUserComponent},
/////////////////////////////////////////// packandcard ///////////////////////////////////////////

  {path: 'list-pack', component: ListPackComponent},
  {path: 'list-pack/:id', component: ViewPackComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
