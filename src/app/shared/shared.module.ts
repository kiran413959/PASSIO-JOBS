import { NgModule } from "@angular/core";
import { HeaderComponent } from "./componets/header/header.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";






@NgModule({
    declarations: [
        HeaderComponent,
        
        ],
        imports: [
            ReactiveFormsModule,
            ],
        

        exports:[
            HeaderComponent,
            ReactiveFormsModule,
            CommonModule,
        
        ]
})

export class SharedModule{
  [x: string]: any;
    
}