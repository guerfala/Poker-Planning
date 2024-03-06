import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Pack} from "../pack";
import {PackService} from "../pack.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CardService} from "../card.service";
import {Card} from "../card";

@Component({
  selector: 'app-view-pack',
  templateUrl: './view-pack.component.html',
  styleUrl: './view-pack.component.css',
})

export class ViewPackComponent  implements AfterViewInit,OnInit{
  pack!:Pack;
  cards!: Card[] ;
  id!: number;
  constructor(private packsService:PackService,private router:Router,private route: ActivatedRoute,private cardservice:CardService) {
  }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.cardservice.findcardofpack(this.id).subscribe(data =>{
      this.cards=data;
      console.log(this.cards);
    });
  }

}
