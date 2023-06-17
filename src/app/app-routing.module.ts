import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ButtonComponent } from './button/button.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'autocomplete', component: AutoCompleteComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'card', component: CardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
