import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RoomComponent } from './room/room.component';
import { HomeComponent } from './frontoffice/home/home.component';
// import { VotebackComponent } from './backoffice/voteback/voteback.component';
import { VoteComponent } from './vote/components/vote.component';
import { VotesListComponent } from './vote/votes-list/votes-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  // {path: 'room', component: RoomComponent},
  {path: '', component: VoteComponent},
  {path: 'votes', component: VotesListComponent},
  // {path: 'voteback', component: VotebackComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
