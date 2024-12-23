import { Component, OnInit } from '@angular/core';
export interface ISocial {
  icon: string,
  name: string,
  link: string
}

@Component({
  selector: 'app-social-bar',
  template: `
    <div class="social-bar d-flex flex-column align-items-center justify-content-center ms-3 position-absolute">
      <div (click)="opened = !opened" class="open-button d-flex justify-content-center">
        <img src="{{icon}}" alt="icon bar">
      </div>

      <div class="mt-5 shiw" *ngIf="opened">
        <a href="{{link.link}}" class="single-link-card d-flex flex-column align-items-center justify-content-center" *ngFor="let link of socialLink">
          <img src="{{link.icon}}" alt="social link">
          <span class="text-light">{{link.name}}</span>
        </a>
      </div>
    <div>
  `,
  styles: [
    `
    .social-bar {
      top:1%;
      left:0;
      z-index: 1000;
      overflow: hidden;
      background: rgba(0, 0, 0, 0.477);
      border-radius: 30px;
      padding: 1.5rem;
      box-shadow: 0px 0px 22px 4px #37DBD6;

      .open-button {
        margin-left: 1.5rem;

        img {
          width: 7rem;
          height: 7rem;
        }
      }

      .single-link-card {
        margin: 1.5rem 0;
        text-decoration: none;

        img {
          width: 4rem;
          height: 4rem;
        }
      }
    }

    @media screen and (max-width: 856px) {
      .social-bar {
        width: 8rem;
        padding: 1.2rem;
        .open-button {
          margin-left: 1.1rem;
          img {
            width: 4.2rem;
            height: 4.2rem;
          }
        }

        .single-link-card {
          img {
            width: 2rem;
            height: 2rem;
          }
        }
      }
    }

    @media screen and (max-width: 600px) {
      .social-bar {
        width: 6rem;
        padding: 1.2rem;
        .open-button {
          margin-left: 0.5rem;
          img {
            width: 3rem;
            height: 3rem;
          }
        }

        .single-link-card {
          img {
            width: 1.5rem;
            height: 1.5rem;
          }
        }
      }
    }

    @media screen and (max-width: 456px) {
      .social-bar {
        width: 20%;
        padding: 1.2rem;
        .open-button {
          margin-left: 0.5rem;
          img {
            width: 2.5rem;
            height: 2.5rem;
          }
        }

        .single-link-card {
          img {
            width: 1rem;
            height: 1rem;
          }
        }
      }
    }
    `
  ]
})
export class SocialBarComponent implements OnInit {
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
  public opened:boolean = false;
  public icon: string = '../../../../assets/icons/touch.png';

  constructor() { }

  ngOnInit(): void {

  }

}
