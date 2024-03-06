import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { RoomComponent } from './room-poker/room/room.component';
import { CreateRoomComponent } from './room-poker/create-room/create-room.component';
import { UpdateRoomComponent } from './room-poker/update-room/update-room.component';
import { TableRoomComponent } from './room-poker/table-room/table-room.component';
import { ChatComponent } from './room-poker/chat/chat.component';
import { VoteComponent } from './vote/components/vote.component';
import { VotesListComponent } from './vote/votes-list/votes-list.component';
import { ConfirmationComponent } from './vote/confirmation/confirmation.component';
import { ProceedComponent } from './vote/proceed/proceed.component';
import { StartComponent } from './vote/start/start.component';
import { VoteCompletedComponent } from './vote/user-select/user-select.component';
import { ResultComponent } from './vote/result/result.component';
import { TableRoomDevComponent } from './room-poker/table-room-dev/table-room-dev.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import {ListPackComponent} from "./list-pack/list-pack.component";
import {ViewPackComponent} from "./view-pack/view-pack.component";
import {SettingsComponent} from "./settings/settings.component";





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,

    RoomComponent!,
    CreateRoomComponent,
    UpdateRoomComponent,
    TableRoomComponent,
    ChatComponent,

    VoteComponent,
    VotesListComponent,
    ConfirmationComponent,
    ProceedComponent,
    StartComponent,
    VoteCompletedComponent,
    ResultComponent,
    TableRoomDevComponent,

    LoginComponent,
    UserDetailsComponent,
    UpdateUserComponent,
    ListPackComponent,
    ViewPackComponent,
    SettingsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSliderModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
