import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  sliderValue = 0;
  sliderStartValue = 0;
  sliderEndValue = 0;
}
