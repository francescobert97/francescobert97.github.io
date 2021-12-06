import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

export interface ISocial {
  icon: string,
  name: string,
  link: string
}

@Component({
  selector: 'app-social-bar',
  template: `
    <div class="social-bar d-flex flex-column align-items-center justify-content-center">
      <div (click)="toggle.emit()" class="open-button d-flex justify-content-center">
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
      width: 80%;
      overflow: hidden;
      background: #23c9c3a6;
      background: rgba(0, 0, 0, 0.477);
      border-radius: 30px;
      padding: 1rem;
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
        position: absolute;
        top: 1%;
        left: 1%;
        z-index: 1000;
        width: 8rem;
        padding: 1.2rem;
        .open-button {
          margin-left: 0.5rem;
          img {
            width: 3.5rem;
            height: 3.5rem;
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
        position: absolute;
        top: 1%;
        left: 1%;
        z-index: 1000;
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
        position: absolute;
        top: 1%;
        left: 1%;
        z-index: 1000;
        width: 5rem;
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
  @Input() opened:boolean = false;
  public icon: string = '../../../../assets/icons/touch.png';
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    
  }

}
