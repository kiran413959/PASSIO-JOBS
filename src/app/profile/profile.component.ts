import { Component, ElementRef, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    designation:string | undefined

    newskill:HTMLElement| null = document.getElementById('skill')

    @ViewChild("skillInput") skillInput!: ElementRef

    @ViewChild("logos") logos!: ElementRef


    constructor(private renderer: Renderer2){
        
    }



        links=[
            
            {icon:'github'},
            
            {icon:'linkedin'},
            
            {icon:'discord'},
            
            {icon:'wordpress'},
            
            {icon:'slack'},
            
            {icon:'figma'},
            
            {icon:'dribbble'},
            
            {icon:'stack-overflow'},
            
            {icon:'gitlab'},
            
            {icon:'square-reddit'},
            
            {icon:'facebook'},
            
            {icon:'twitter'},
            
            {icon:'instagram'},
            
            {icon:'codepen'},
    
        ]

    
        data = [
        
            {
        
                title: 'Profile Summary',
        
                icon:'address-card',
        
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        
                isOpen: false
        
            },
            {
                
                title: 'Skills',
                
                icon:'head-side-gear',
                
                content:[
                    
                    {skill:'Frontend Developer'},
                    
                    {skill:'Angular'},
                    
                    {skill:'TypeScript'},
                    
                    {skill:'HTML5'},
                    
                    {skill:'CSS3'},
                    
                    {skill:'JavaScript'},
                
                ],
                
                isOpen: false
                
            },    
            {
                
                title: 'Experience',
                
                icon:'briefcase',
                
                isOpen: false,
                
                Expdetails: {
                    
                    designation: 'Frontend Developer',
                    
                    duration: 'Feb 2021 - Present',
                    
                    company: 'Company A',
                    
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
                
                }

            },
            {
                
                title: 'Education',
                
                icon:'user-graduate',
                
                isOpen: false,
                
                Edudetails: {
                    
                    degree: 'Bachelor of Science',
                    
                    major: 'Computer Science',
                    
                    duration: '2018 - 2022',
                    
                    institution: 'Institution X'
                
                }

            },
            {
                
                title: 'Projects',
                
                icon:'code-branch',
                
                isOpen: false,
                
                Projectdetails: [
                        
                    {
                            
                            title: 'Project Title 1',
                            
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
                            
                            technologies: ['Angular', 'TypeScript']
                        
                        },
                        
                        {
                            
                            title: 'Project Title 2',
                            
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
                            
                            technologies: ['React', 'JavaScript']
                        
                        }
                
                    ]

            },
            {
      
                title:'Personal Details',
      
                icon:'info-circle',
      
                isOpen:false,
      
                detail:[
        
                    {
          
                        title: 'Name',
          
                        value: 'John Doe'
        
                    },
                    {       
          
                        title: 'Email',
          
                        value: 'john.doe@example.com'
        
                    },       
                    {
          
                        title: 'Phone',
          
                        value: '+1 123 456 7890'
        
                    },
                    {
          
                        title: 'Address',
          
                        value: '123 Main St, City, State, Zip'
        
                    },       
                    {
          
                        title: 'Date of Birth',
          
                        value: '1990-01-01'
        
                    },      
                    {
          
                        title: 'Gender',
          
                        value: 'Male'

                    },     
                    {
          
                        title: 'Nationality',
          
                        value: 'American'
        
                    },   
                    {
          
                        title: 'Hobbies',
          
                        value: 'Reading, Coding'
        
                    },
                    {
          
                        title: 'Language Proficiency',
          
                        value: 'English (Native), Spanish ( Fluent)'
        
                    }
      
                ]
    
            },
            {
      
                title:'links',
      
                icon:'globe-pointer',
      
                isOpen:false,
      
                details:[
        
                    {
          
                        title: 'Github',
          
                        link: 'https://github.com/username'
        
                    },
                    {
          
                        title: 'LinkedIn',
          
                        link: 'https://www.linkedin.com/in/username'
        
                    },
                    {
          
                        title: 'Website',
          
                        link: 'https://example.com'
        
                    },
                    {   
          
                        title: 'Email',
          
                        link:'mailto:username@example.com'
        
                    }
      
                ]
    
            }

        ];

     checkArray(value: any): any {

        if(Array.isArray(value)) {
            return value
        }

        else {
            return [];
        }
    }

    ngOnInit() {
    // ...
    }

    openEditor(section: any) {

        section.isOpen = true;
        console.log('hiiiiii');
    
     }

    closeEditor(section: any) {

        section.isOpen = false;

    }

    openlogos(){
        
        console.log(this.logos.nativeElement.classList);
        if(this.logos.nativeElement.classList.contains("tw-hidden")){
            this.renderer.removeClass(this.logos.nativeElement, "tw-hidden")
        } else {
            console.log(1);
            
            this.renderer.addClass(this.logos.nativeElement, "tw-hidden")
        }

    }
    selectedIcon: string | null = null
    getIcon(iconName: string){
        console.log(iconName);
        this.selectedIcon = iconName
        
    }

    addinfo(title:string){

        switch(title){

            case 'Profile Summary':

                this.data[0].content = 'New Profile Summary'

            break;
            case 'Skills':
                
                if (this.data && Array.isArray(this.data)) {
                   
                    if (this.data[1] && !Array.isArray(this.data[1].content)) {

                            this.data[1].content = []; 
                    }
                    if (this.data[1] && Array.isArray(this.data[1].content)) {

                            const skillInputValue = this.skillInput.nativeElement.value
                            //   let newskill= this.newskill?                 
                            const newObj = {skill:skillInputValue}
                            
                            this.data[1].content.push(newObj);
                            console.log(this.data[1].content);

                    } else {

                        console.error('Invalid data structure: data[1].content is not accessible');
                    }
                    
                } else {

                    console.error('Invalid data structure: data is not an array');
                    
                }

            break;

            case 'Experience':
                if (this.data && Array.isArray(this.data) && this.data[2] && this.data[2].Expdetails) {

                    this.data[2].Expdetails.designation = 'New Designation';

                } else {

                    console.error('Invalid data structure: data[2].Expdetails is not accessible');
                }

            break;
            case 'Education':

                if (this.data && Array.isArray(this.data) && this.data[3] && this.data[3].Edudetails) {

                this.data[3].Edudetails.degree = 'New Degree';

                } else {

                    console.error('Invalid data structure: data[3].Edudetails is not accessible');

                }

            break;
            case 'Projects':

                if (this.data && Array.isArray(this.data) && this.data[4] && this.data[4].Projectdetails) {

                this.data[4].Projectdetails.push({title: 'New Project', description: 'New Project Description', technologies: ['New Technology']});
            
                } else {

                console.error('Invalid data structure: data[4].Projectdetails is not accessible');
            
                }

            break;
            case 'Personal Details':

                if (this.data && Array.isArray(this.data) && this.data[5] && this.data[5].detail) {
                
                    this.data[5].detail.push({title: 'New Detail', value: 'New Value'});
                
                } else {
                
                    console.error('Invalid data structure: data[5].detail is not accessible');
                
                }
        
            break;
            case 'links':

                if (this.data && Array.isArray(this.data) && this.data[6]) {
                    
                        
                    if (this.data[6].details) {
                            
                        this.data[6].details.push({title: 'links', link: 'https://newlink.com'});
                    
                    } else {

                       console.log('error found');
                       
                        
                        // this.data[6].details = [{title: 'New Link', link: 'https://newlink.com'}];
                    
                    }
                
                } else {
                    
                    console.error('Invalid data structure: data[6] is not accessible');
                
                }
            
            break;
            default:

                 console.error('Invalid title provided');
                
            break;

        }

    }

  saveUpdate(title:string){
    switch(title){
        case 'Skills':
          // code to save or update skills
          break;
        case 'Experience':
          // code to save or update experience details
          break;
        case 'Education':
          // code to save or update education details
          break;
        case 'Projects':
          // code to save or update project details
          break;
        case 'Personal Details':
          // code to save or update personal details
          break;
        case 'Links':
          // code to save or update links
          break;
    }
  }
}
