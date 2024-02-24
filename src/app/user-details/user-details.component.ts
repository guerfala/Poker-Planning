import { Component } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../Services/user.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  userList!: User[];
  dataSource:any;
  displayedColumns = ['userId','firstName','lastName','email','password','image','gender','role','skillRate'];

  constructor(private userService: UserService){
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
}
