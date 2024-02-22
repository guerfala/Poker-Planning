import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TableRoomComponent } from './table-room/table-room.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { AddPackComponent } from './add-pack/add-pack.component';
import { EditPackComponent } from './edit-pack/edit-pack.component';
import {FormsModule} from "@angular/forms";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from "@angular/material/button";
import { PaksListComponent } from './paks-list/paks-list.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        RoomComponent,
        TableRoomComponent,
        AddPackComponent,
        EditPackComponent,



    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        HttpClientModule,
        FormsModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,

    ],
    providers: [
        provideClientHydration(),
        provideAnimationsAsync(),
    ]
})
export class AppModule { }
