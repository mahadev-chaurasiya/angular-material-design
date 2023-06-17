import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ButtonComponent } from './button/button.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { SliderComponent } from './slider/slider.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
    MenubarComponent,
    ButtonComponent,
    HomeComponent,
    CardComponent,
    SliderComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
