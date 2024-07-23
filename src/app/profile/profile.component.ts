import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  designation:string | undefined

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

  addinfo(title:string){
    switch(title){
        case 'Skills':

    }

  }
}
