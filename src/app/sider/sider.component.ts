import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.css']
})
export class SiderComponent {
// @Input() Data:any
// @Input() Jobid:number | null = null
//   @Output() Jobid:number | null = null 
//   constructor() { }
//   senddata(JobId:number){
//     console.log(JobId);
//     this.Jobid = JobId;

    
//   }



@Input() Data!:any[]
@Output() itemselected = new EventEmitter<any>()

SelectedItem(item: any) {
    this.itemselected.emit(item);
  }

   


}
