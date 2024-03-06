import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { HomeComponent } from './home/home.component';
import {ListPackComponent} from "./list-pack/list-pack.component";
import {ViewPackComponent} from "./view-pack/view-pack.component";

const routes: Routes = [
  {path: 'room', component: RoomComponent},
  {path: 'home', component: HomeComponent},
  {path: 'list-pack', component: ListPackComponent},
  {path: 'list-pack/:id', component: ViewPackComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
