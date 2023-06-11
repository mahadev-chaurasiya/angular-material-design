import { NgModule } from "@angular/core";
import {MatInputModule} from "@angular/material/input"
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from "@angular/forms";
import {MatButtonModule} from "@angular/material/button"
import {MatIconModule} from "@angular/material/icon"
import {MatDividerModule} from "@angular/material/divider"
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatMenuModule} from "@angular/material/menu"
import {MatBadgeModule} from "@angular/material/badge"
import {MatSidenavModule} from "@angular/material/sidenav"
import {MatListModule} from "@angular/material/list"

 //Custome Material Components
@NgModule({
    exports:[
       MatInputModule,
       MatAutocompleteModule,
       ReactiveFormsModule,
       MatButtonModule,
       MatIconModule,
       MatDividerModule,
       MatToolbarModule,
       MatMenuModule,
       MatBadgeModule,
       MatSidenavModule,
       MatListModule
    ]
})
export class MaterialModule{

}