import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-links-bar',
  template: `
      <div class="w-100 links-bar d-flex gap-3 justify-content-center align-items-center box-shadow-green ">
          <a href="{{link.link}}" class="single-link-card mt-2" *ngFor="let link of socialLink">
              <img src="{{link.icon}}" class="w-100 h-100" alt="social icon">
            </a>
      </div>
  `,
  styles: [
    `
    .links-bar {
                padding: 2rem;
                background: rgb(0,0,0);
                border-radius:0 0 30px 30px ;
                img {
                  max-width: 40px;
                  max-height: 40px;

                }
        }

        @media (max-width: 1200px) {
          .links-bar {
            padding: 0.7rem 2rem;
                img {
                  max-width: 20px;
                  max-height: 20px;
                }
        }
        }
    `
  ]
})
export class LinksBarComponent implements OnInit {
@Input() socialLink:any = [
  {
    icon: '../../../../assets/icons/github-icon.png',
    name: 'GitHub',
    link: 'https://github.com/francescobert97'
  },
  {
    icon: '../../../../assets/icons/linkedin-icon.png',
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/francesco-bertorotta-76a581211/'
  },
  {
    icon: '../../../../assets/icons/gmail-icon.png',
    name: 'Gmail',
    link: 'francesco.dev.9@gmail.com'
  }
]

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
