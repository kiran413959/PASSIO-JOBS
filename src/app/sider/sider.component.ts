import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.css']
})
export class SiderComponent {
@Input() Data:any
  

  // ShowContent(){
  //   this.contents.show()
    
  // }


  @Output() contentData = new EventEmitter()

  senddata(){
    this.contentData.emit(this.Data.list)
  }


}
