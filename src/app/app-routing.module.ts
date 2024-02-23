import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserDetailsComponent } from './user-details/user-details.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path:  'login', component: LoginComponent },
  {path:  'test', component: TestComponent},
  {path:  'usertable' , component: UserTableComponent},
  {path:  'userDetails', component:UserDetailsComponent}




  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
