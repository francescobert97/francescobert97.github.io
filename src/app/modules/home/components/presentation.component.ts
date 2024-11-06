import { ISocial, SocialBarComponent } from './social-bar.component';
import { Component, Input, OnInit } from '@angular/core';
import { IPresentation } from 'src/app/shared/models/home.model';

@Component({
  selector: 'app-presentation',
  template: `

<div class="monitor box-shadow-green position-absolute"></div>

    <div  class=" presentation overflow-hidden position-relative mt-sm-5 box-shadow-green w-100">
      <video class="" src="{{presentationContent.video}}" autoplay muted loop playsinline></video>

      <div class="personal-content position-absolute gap-4 d-flex justify-content-between  box-shadow-green rounded col-11 ms-4 me-1 p-3 ">
        <img class=" border box-shadow-green w-100 h-100 rounded" src="{{presentationContent.profilePicture}}" alt="profile picture">
        <p class="  flex-grow-1">{{presentationContent.biography}}</p>
      </div>

      <div class="position-absolute links-bar d-flex gap-3 justify-content-center align-items-center p-1">
          <a href="{{link.link}}" class="single-link-card mt-2" *ngFor="let link of socialLink">
              <img src="{{link.icon}}" class="" alt="social icon">
            </a>
      </div>
    </div>


  `,
  styles: [
    `

    .links-bar {
      width: 40%;
      background: rgb(0,0,0);
      bottom: 0;
      right: 32%;
      border-radius: 10px 10px 0 0;
      img {
        max-width: 40px;
        max-height: 40px;
      }
    }
    .monitor {
      background: black;
      width: 10%;
      height: 80px;
      top: 0;
      right:46%;
      animation: slideIn 0.7s forwards;
    }

    .presentation {
      font-size: 0.8em;
      animation: slideIn 0.7s forwards;
      border: 10px solid black;

      border-radius: var(--border);
      max-height: 400px;

        video{
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .personal-content {
          background: rgb(0,0,0, 0.850);
          max-height: 18rem;
          top: 5%;
          img{
            max-width: 180px;
            max-height: 180px;
            min-width: 80px;
            min-height: 80px;
          }
          .single-link-card {
            margin: 1.5rem 0;
            text-decoration: none;

      }

      }

    }
    @keyframes slideIn {
      from {
        top: -9999px;
      }
      to {
        top: 0;
      }
    }

    @media screen and (max-width: 856px) {
      .presentation {
          .personal-content {
            max-height: 10rem;
            font-size: 0.6em;
          }
      }
    }

    @media screen and (max-width: 576px) {

      .links-bar {
        img {
        max-width: 20px;
        max-height: 20px;
      }

      }
      .monitor { display:none;}
      .presentation {
          max-height: 300px;
          border: 0;
          border-bottom: 5px solid black;
          border-radius: 0;
          video {
            min-height: 310px;
          }
      }
    }

    @media screen and (max-width: 456px) {
      .presentation {
          .personal-content {
            font-size: 0.5em;
          }
      }
    }
    `
  ]
})
export class PresentationComponent implements OnInit {
  @Input() public presentationContent!:IPresentation;
  socialLink:ISocial[] = [
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

  constructor() { }

  ngOnInit(): void {
  }

}
