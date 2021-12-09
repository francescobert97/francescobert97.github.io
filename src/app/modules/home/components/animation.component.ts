import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

export interface IAnimation {
  sizeName: boolean,
  hideName: boolean,
  buttonAnimation: boolean,
  buttonStart:any ,
  hideButton: boolean,
  closeAnimation:boolean
}

@Component({
  selector: 'app-animation',
  template: `
  <div class="background-animation" [class]="animation.closeAnimation? 'end-animation' : null">
    <div>
      <p class="text-light" [class]="animation.sizeName? 'animation-size-name' : null" *ngIf="animation.hideName">{{text2}}</p>

      <button class="btn text-light" [class]="animation.buttonAnimation? 'button-animation' : null" *ngIf="animation.hideButton" (click)="endAnimation()">Clicca per Eseguire!</button>
    </div>
  </div>
  `,
  styles: [
    `
    .background-animation {
      position: relative;
      background: url('../../../../assets/template/background-animation.jpg') center no-repeat;
      transition: 1.7s;
      background-size: cover;
      height: 100vh;
      p {
        font-size: 1.2em;
        position: absolute;
        top: 59.2%;
        left: 45.8%;
        text-shadow: -1px 1px 7px rgba(108, 255, 215, 1);
        transition: 3.4s;
      }

      button {
        text-shadow: -3px -1px 21px rgba(108, 255, 215, 1);
        position: absolute;
        top: 67%;
        left: 43%;
        font-size: 1.2em;
        border: 1px solid aqua;
        border-radius: 20px;
        padding: 0.5rem 1rem;
        transition: 3s;
        &:hover {
          background: rgba(0, 255, 255, 0.774);
          text-shadow: -3px -1px 21px rgba(0, 0, 255, 1);
        }
      }
    }

    .button-animation {
      background: rgba(0, 255, 255, 0.374);
      box-shadow: -3px -1px 21px rgba(108, 255, 215, 1);
    }

    .animation-size-name {
        transform: scale(3);

    }

    .end-animation {
      transform: scale(250)
    }


    @media screen and (max-width: 1200px) {

      .background-animation {
        background-size: 350% contain;

        p {
          font-size: 1.2em;
          left: 44.2%;
        }

        button {
          left: 40.5%;
        }
      }

    }

    @media screen and (max-width: 856px) {

      .background-animation {
        background-size: 350% contain;

        p {
          font-size: 1.2em;
          left: 42.2%;
        }

        button {
          left: 37.7%;
        }
      }

    }

    @media screen and (max-width: 600px) {

      .background-animation {
        background-size: 350% contain;

        p {
          font-size: 1.2em;
          left: 38.8%;
        }

        button {
          left: 20.7%;
          padding: 0.5rem 2rem;
        }
      }

    }

    @media screen and (max-width: 456px) {
      .background-animation {

        background-size: 350% contain;

        p{
          font-size: 1.2em;
          left: 35%;
        }

        button {
          left: 21%;
        }
      }
    }
    `
  ]
})
export class AnimationComponent implements OnInit { 
  animation:IAnimation = {
    sizeName: false,
    hideName: true,
    buttonAnimation: false,
    buttonStart: setInterval(() =>  this.animation.buttonAnimation = !this.animation.buttonAnimation, 1000),
    hideButton: true,
    closeAnimation:false
  }
  
  text2:string = 'Francesco.exe'

  constructor(private router:Router, private changeDetection:ChangeDetectorRef) { }

  ngOnInit(): void {
    
  }

  test() {
    
    let i = 13;
    const text = 'Francesco.exe';
     const nameAnimation = setInterval(() => {
         this.text2 = this.text2.substr(0, this.text2.length -1)
          i-- 
          if(i < 0) { clearInterval(nameAnimation) }
        }
        , 50);

        
        
  }
  public endAnimation(): void {

    this.animation.sizeName = true;

    this.test();

   setTimeout(() => this.animation.hideName = false, 1000);

    this.animation.hideButton = false;

    if(!this.animation.hideButton) {
      clearInterval(this.animation.buttonStart);
  
    }

    setTimeout(() =>{
      this.animation.closeAnimation = true
  
    }, 2000);
   

    setTimeout(() =>  this.router.navigateByUrl('/home'), 2300);
  }

}
