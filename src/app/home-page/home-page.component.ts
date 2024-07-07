import { Component, Injectable, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from '../shared/componets/header/header.component';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  
  constructor(private shared: SharedModule,
    private header: HeaderComponent  // injecting the HeaderComponent from shared module

  ) { }

 
  
  
  
  ngOnInit(): void {
    console.log(this.header.ngAfterViewInit);
    this.header.isLoggedIn = true;
    this.header.ngOnInit
    this.header.ngAfterViewInit
  }
  
}

