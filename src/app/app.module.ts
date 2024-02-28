import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { VoteComponent } from './vote/components/vote.component';
import { VotesListComponent } from './vote/votes-list/votes-list.component';
import { ConfirmationComponent } from './vote/confirmation/confirmation.component';
import { RoomComponent } from './room-poker/room/room.component';
import { CreateRoomComponent } from './room-poker/create-room/create-room.component';
import { RouterModule, Router } from '@angular/router';
import { UpdateRoomComponent } from './room-poker/update-room/update-room.component';
import { TableRoomComponent } from './room-poker/table-room/table-room.component';
import { ProceedComponent } from './vote/proceed/proceed.component';
import { VoteCompletedComponent } from './vote/user-select/user-select.component';
import { StartComponent } from './vote/start/start.component';
import { ResultComponent } from './vote/result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VoteComponent,
    VotesListComponent,
    ConfirmationComponent,
    RoomComponent,
    CreateRoomComponent,
    HomeComponent,
    UpdateRoomComponent,
    TableRoomComponent,
    ProceedComponent,
    VoteCompletedComponent,
    StartComponent,
    ResultComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    RouterModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    MatSelectModule,
    MatDialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
