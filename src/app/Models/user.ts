export class User {


  userId!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
  image!: string;
  gender!: Gender;
  role!: Role;
  skillRate!: number;



  constructor(
    userId: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    image: string,
    gender: Gender,
    role: Role,
    skillRate: number
  ) {
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.image = image;
    this.gender = gender;
    this.role = role;
    this.skillRate = skillRate;
  }
}
  export enum Gender {
    Male = 'Male',
    Female = 'Female'
  }
  
  export enum Role {
    Admin = 'Admin',
    ScrumMaster = 'ScrumMaster',
    ChefProjet = 'ChefProjet',
    Developpeur = 'Developpeur'


}
