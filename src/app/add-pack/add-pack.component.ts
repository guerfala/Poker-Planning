import {Component, OnInit} from '@angular/core';
import {Pack} from "../pack";
import {PackService} from "../pack.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-pack',
  templateUrl: './add-pack.component.html',
  styleUrl: './add-pack.component.css'
})
export class AddPackComponent implements OnInit {
  packname!:string;
  description!:string;
  nbcards!:number;
  test :Pack = new Pack();
  constructor(private packService: PackService,
              private router: Router) { }
  ngOnInit(): void {
  }

  savepack(){
    this.packService.createPack(this.test).subscribe( data =>{
        console.log(data);
        this.goTopackList();
      },
      error => console.log(error));
  }



  goTopackList(){
    this.router.navigate(['/list-pack']);
  }

  onSubmit(){
    this.test.packName=this.packname;
    this.test.packDescription=this.description;
    this.test.nbCards=this.nbcards;
    console.log(this.test);
    this.savepack();
  }


}
