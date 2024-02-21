import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { HomeComponent } from './home/home.component';
import { VoteComponent } from './vote/vote.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'room', component: RoomComponent},
  {path: '', component: VoteComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
