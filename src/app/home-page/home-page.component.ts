import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router){}
  Data=[
    {JobId:'100',position:'Driver',Companyname:'LevelX',CompanyLocation:'calicut',salaryfrom:'40000', salaryto:'90000',applytype:'Easy to apply',per:'month', discription1:'Present product demonstrations and effectively communicate the value and benefits of our software to prospective clients.',discription2:'Job Types: Full-time, Permanent.' },
    {JobId:'101',position:'Full-stack Developer',Companyname:'IBM',CompanyLocation:'Pune',salaryfrom:'20000', salaryto:'60000',applytype:'Easy to apply', per:'month', discription1:'Present product demonstrations and effectively communicate the value and benefits of our software to prospective clients.',discription2:'Job Types: Remote, Temperory.' },
    {JobId:'102',position:'Therapist',Companyname:'Ayush',CompanyLocation:'Bangalore',salaryfrom:'15000', salaryto:'30000',per:'month',applytype:'', discription1:'Present product demonstrations and effectively communicate the value and benefits of our software to prospective clients.',discription2:'Job Types: Full-time, Permanent.' },
    {JobId:'103',position:'UI/UX Designer',Companyname:'Microsoft',CompanyLocation:'Delhi',salaryfrom:'400000', salaryto:'900000',per:'year',applytype:'Easy to apply', discription1:'Present product demonstrations and effectively communicate the value and benefits of our software to prospective clients.',discription2:'Job Types: Full-time, Permanent.' },
    {JobId:'104',position:'Office boy',Companyname:'U And SS',CompanyLocation:'calicut',salaryfrom:'12000', salaryto:'15000',applytype:'Easy to apply',per:'month', discription1:'Present product demonstrations and effectively communicate the value and benefits of our software to prospective clients.',discription2:'Job Types: Full-time, Permanent.' },
    {JobId:'105',position:'Manager',Companyname:'Go2rooms',CompanyLocation:'kochi',salaryfrom:'20000', salaryto:'30000',per:'month',applytype:'Easy to apply', discription1:'Present product demonstrations and effectively communicate the value and benefits of our software to prospective clients.',discription2:'Job Types: Full-time, Permanent.' },
    {JobId:'106',position:'Frontend Developer',Companyname:'AR Solution',CompanyLocation:'Germany',salaryfrom:'800000', salaryto:'1500000',applytype:'', discription1:'Present product demonstrations and effectively communicate the value and benefits of our software to prospective clients.',discription2:'Job Types: Full-time, Permanent.' },
    {JobId:'107',position:'plumber',Companyname:'Mr',CompanyLocation:'calicut',salaryfrom:'40000', salaryto:'90000',applytype:'Easy to apply', discription1:'Present product demonstrations and effectively communicate the value and benefits of our software to prospective clients.',discription2:'Job Types: Full-time, Permanent.' },
    {JobId:'108',position:'Driver',Companyname:'GRE infotech',CompanyLocation:'Mascow',salaryfrom:'200000', salaryto:'3500000',applytype:'Easy to apply', discription1:'Present product demonstrations and effectively communicate the value and benefits of our software to prospective clients.',discription2:'Job Types: Part-time, Permanent.' },
  ]
  
  
  
  ngOnInit(): void {
  }
  showcontent(){
    this.router.navigateByUrl('/content')
  }

    
  }

  


