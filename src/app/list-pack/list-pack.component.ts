import {AfterViewInit,ElementRef, Component, OnInit} from '@angular/core';
import {Pack} from "../pack";
import {PackService} from "../pack.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-pack',
  templateUrl: './list-pack.component.html',
  styleUrl: './list-pack.component.css'
})
export class ListPackComponent  implements AfterViewInit,OnInit{

  displayedColumns: string[] = ['packId', 'nbCards', 'packDescription', 'packName', 'action'];
  audio!: HTMLAudioElement;

  pack!:Pack;
  packs!: Pack[] ;
  dataSource !: any;
  isPopupVisible: boolean = false;
  audiosound!:number;

  constructor(private packsService:PackService,private router:Router,private elementRef: ElementRef) {
    this.audio = new Audio();
    this.audio.src = './assets/img/sound.mp3';
    this.audio.load();
    this.audiosound=this.audio.volume;

  }

  ngOnInit(): void {
    this.getPacks();

    this.audiosound=this.audio.volume;

  }


  spanClicked() : void{
    console.log("test");


  }
  functionToCall() {

    const element: any = this.elementRef.nativeElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }  }
  togglePopup() {
    this.isPopupVisible = !this.isPopupVisible;
  }

  setVolume(volume: number) {

      this.audio.volume = volume;


  }

  onHover() {

    this.audio.play()
      .then(() => console.log('Audio played successfully'))
      .catch(error => console.error('Error playing audio:', error));
    console.log('Hovered!');

    // Call any other TypeScript function or perform any action you want here
  }



  private getPacks(){
    this.packs=[];
    this.packsService.getPackList().subscribe(data =>{
      this.packs=data;
    });
  }

  onEdit(id: bigint) {
    // Handle edit action here
    this.router.navigate(['update-pack', id]);
  }

  onAddcard(id: bigint) {
    // Handle edit action here
    this.router.navigate(['add-card', id]);
  }


  onDelete(id: bigint) {
    // Handle delete action here
    this.packsService.deletePack(id).subscribe( data => {
      console.log(data);
      this.getPacks();

    })
  }

  ngAfterViewInit(): void {
  }

  onFullscreenToggle(enabled: boolean) {

    this.functionToCall();
    this.isPopupVisible =false;
    // You may also directly call a method in ListComponent to change the audio,
    // if you have a reference to it. Otherwise, pass `fullscreenEnabled` as @Input to ListComponent.
  }


  onSecondSettingChange(value: number) {

this.setVolume(value);
    // You may also directly call a method in ListComponent to change the audio,
    // if you have a reference to it. Otherwise, pass `fullscreenEnabled` as @Input to ListComponent.
  }


  gotoviewpack(id:bigint) {
    this.router.navigate(['list-pack', id]);

  }
}
