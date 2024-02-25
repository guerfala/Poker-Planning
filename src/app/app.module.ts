import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './frontoffice/header/header.component';
import { FooterComponent } from './frontoffice/footer/footer.component';
import { HomeComponent } from './frontoffice/home/home.component';
// import { RoomComponent } from './room/room.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
// import { TableRoomComponent } from './table-room/table-room.component';
import { VoteComponent } from './vote/components/vote.component';
import { VotesListComponent } from './vote/votes-list/votes-list.component';
import { ConfirmationComponent } from './vote/confirmation/confirmation.component';
// import { VotebackComponent } from './backoffice/voteback/voteback.component';
// import { FooterBackComponent } from './backoffice/components/footer/footerback.component';
// import { NavbarComponent } from './backoffice/components/navbar/navbar.component';
// import { SidebarComponent } from './backoffice/components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    // RoomComponent,
    VoteComponent,
    // TableRoomComponent,
    VotesListComponent,
    ConfirmationComponent,
    // VotebackComponent,
    // FooterBackComponent,
    // NavbarComponent,
    // SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
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
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
    // provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
