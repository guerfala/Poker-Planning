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

    const updateUser: User = {
      // Include only the attributes you want to update
      userId: this.userId,
      // Add more attributes as needed
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      password: this.user.password,
      email: this.user.email,
      image: this.user.image,
      gender: this.user.gender, 
      role: this.user.role,
      skillRate: this.user.skillRate
    };
    this.userservice.UpdateUser(this.userId, updateUser)
   
      .subscribe(data =>{
        this.userlist();
      },error => console.log(error));
      console.log(this.userId);
      console.log(this.user);
  }

  




  userlist() {
    this.router.navigate(['/userDetails'])
  }


}
