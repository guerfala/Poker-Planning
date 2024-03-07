import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UpdateUserComponent } from './update-user/update-user.component';



const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'home', component: HomeComponent },
  {path:  'login', component: LoginComponent },
  {path:  'test', component: TestComponent},
  {path:  'userDetails', component:UserDetailsComponent},
  {path: 'updateUser/:id', component:UpdateUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
