import { Component } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {

  userId!: number;
  user: User = new User();


  constructor(private userservice: UserService , private route: ActivatedRoute , private router: Router)
  {}



  
  ngOnInit(): void {

    this.userId = this.route.snapshot.params['id'];

    this.userservice.getUserById(this.userId).subscribe(data =>{
      this.user = data;
    });
  }


  onSubmit(){
    this.userservice.UpdateUser(this.userId, this.user)
      .subscribe(data =>{
        this.userlist();
      },error => console.log(error));
  }
  userlist() {
    this.router.navigate(['/userDetails'])
  }


}
