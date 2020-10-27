import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './main/main.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [MainComponent, SliderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [MainComponent],
})
export class AppModule {}
