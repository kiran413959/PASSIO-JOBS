import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../shared/componets/header/header.component';
import Swal from 'sweetalert2';
import { SiderComponent } from '../sider/sider.component';




@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent  {
  

  @Input() contentData:any
 
  
  IsloggedIn : boolean = false
  constructor(
    private header : HeaderComponent,
    private router : Router,
    public sider : SiderComponent  
  ) { }
  
  
  

  
  
  navigateToresume_selection(){
    // console.log(this.Data);
    const token = localStorage.getItem('token');
    this.IsloggedIn = token !== null;
    
    if(this.IsloggedIn){
      this.router.navigateByUrl('/resume_selection')
    }else{
      Swal.fire({
        title: "Not LoggedIn!",
        text: "you have to Log in first.",
        icon: "warning"
      });
    }
      
  }

}
