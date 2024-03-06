import {AfterViewInit, Component, EventEmitter, ElementRef, OnInit, ViewChild, Output, Input} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {ListPackComponent} from "../list-pack/list-pack.component";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent  {
  @Output() fullscreenToggle = new EventEmitter<boolean>();
  @Output() secondSettingChange = new EventEmitter<number>(); // Change `any` to your specific type
  @Input() volume!: number;
  sliderValue=this.volume ; // Default value for the slider

  constructor() {
    this.sliderValue=this.volume;

  }

  onSliderChange(event: any) {
    this.sliderValue = event.value;
    console.log(event.value);
  }
  requestFullscreen() {
    this.fullscreenToggle.emit(true); // Emit true when fullscreen is activated (adjust logic as needed)
  }

  changeSecondSetting(value: any) {

    this.secondSettingChange.emit(value);
  }

  soundon() {
    this.secondSettingChange.emit(1);

  }

  soundoff() {
    this.secondSettingChange.emit(0);

  }
}
