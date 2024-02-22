import {Component, OnInit} from '@angular/core';
import {Pack} from "../pack";
import {PackService} from "../pack.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-pack',
  templateUrl: './edit-pack.component.html',
  styleUrl: './edit-pack.component.css'
})
export class EditPackComponent implements OnInit{
  id!: number;
  pack: Pack = new Pack();
  constructor(private packservice: PackService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.packservice.getpackById(this.id).subscribe(data => {
      this.pack = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.packservice.updatepack(this.id, this.pack).subscribe( data =>{
        this.gotopack();
      }
      , error => console.log(error));
  }

  gotopack(){
    this.router.navigate(['/list-pack']);
  }
}
