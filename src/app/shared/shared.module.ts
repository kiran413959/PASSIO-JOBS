import { NgModule } from "@angular/core";
import { HeaderComponent } from "./componets/header/header.component";
import { ReactiveFormsModule } from "@angular/forms";






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
        
        ]
})

export class SharedModule{
    
}