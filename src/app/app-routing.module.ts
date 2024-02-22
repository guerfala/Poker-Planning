import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { HomeComponent } from './home/home.component';
import {PaksListComponent} from "./paks-list/paks-list.component";
import {AddPackComponent} from "./add-pack/add-pack.component";
import {EditPackComponent} from "./edit-pack/edit-pack.component";

const routes: Routes = [
  {path: 'room', component: RoomComponent},
  {path: 'home', component: HomeComponent},
  {path: 'list-pack', component: PaksListComponent},
  {path: 'create-pack', component: AddPackComponent},
  {path: 'update-pack/:id', component: EditPackComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
