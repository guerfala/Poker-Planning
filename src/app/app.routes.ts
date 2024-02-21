import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { VoteComponent } from './vote/vote.component';

export const routes: Routes = [
    {path: '', component: VoteComponent},
    {path: 'home', component: HomeComponent},
    {path: 'room', component: RoomComponent},
];
