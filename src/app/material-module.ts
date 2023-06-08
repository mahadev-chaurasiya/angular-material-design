import { NgModule } from "@angular/core";
import {MatInputModule} from "@angular/material/input"
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from "@angular/forms";

 //Custome Material Components
@NgModule({
    exports:[
       MatInputModule,
       MatAutocompleteModule,
       ReactiveFormsModule
    ]
})
export class MaterialModule{

}