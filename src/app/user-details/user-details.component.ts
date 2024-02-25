import { Component } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../Services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  userList!: User[];
  users!: User[];
  dataSource:any;
  displayedColumns = ['userId','firstName','lastName','email','password','image','gender','role','skillRate','Actions'];

  constructor(private userService: UserService, private router: Router){
    this.userService.getUserList()
    .subscribe(res => {
      this.userList = res;
      this.dataSource = new MatTableDataSource<User>(this.userList);
    });
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  getUsers(){
    this.userService.getUserList().subscribe(data =>{
      this.users = data;
    })
  }


  deleteUser(id: number) {
    this.userService.DeleteProfil(id).subscribe(data => {
      this.getUsers();
    })
  }


  editUser(id: number) {
    this.router.navigate(['/updateUser', id]);
  
  }


  
}
