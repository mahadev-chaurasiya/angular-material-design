import { NgModule } from "@angular/core";
import {MatInputModule} from "@angular/material/input"
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from "@angular/forms";
import {MatButtonModule} from "@angular/material/button"
import {MatIconModule} from "@angular/material/icon"
import {MatDividerModule} from "@angular/material/divider"
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatMenuModule} from "@angular/material/menu"

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
       MatMenuModule
    ]
})
export class MaterialModule{

}