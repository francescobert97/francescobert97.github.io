import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import { Router } from '@angular/router';
import { AccessHomeService } from 'src/app/shared/services/access-home.service';

export interface IAnimation {
  deleteCharEffect: boolean;
  buttonAnimation: boolean;
  buttonStart: any;
  hideButton: boolean;
  closeAnimation: boolean;
}

@Component({
  selector: 'app-animation',
  template: `
    <div
      class="background-animation d-flex justify-content-center align-items-center"
      [class]="animation.closeAnimation ? 'end-animation' : null"
    >
      <div
        class=" h-50 d-flex flex-column justify-content-between align-items-center"
      >
        <div>
          <ng-container *ngFor="let text of textSplit">
            <span
              class="personal-font-style text-light"
              [class]="
                animation.deleteCharEffect ? 'animation-size-name' : null
              "
              >{{ text | uppercase}}</span
            >
          </ng-container>
        </div>
        <button
          class="btn text-light"
          [class]="animation.buttonAnimation ? 'button-animation' : null"
          *ngIf="animation.hideButton"
          (click)="endAnimation()"
        >
          Clicca per Eseguire!
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .background-animation {
        background: url('../../../../assets/template/background-animation.jpg')
          center no-repeat;
        transition: 1.7s;
        background-size: cover;
        height: 100vh;
        span {

          margin: 0 0.2rem;

          font-size: 1.9em;
          text-shadow: 0px 0px 107px rgba(108, 255, 215, 1);
          text-shadow: 0px 0px 2px #00FFDD, 0px 0px 20px #00FFDD, 0px 0px 20px #00FFDD;
        }
        button {
          margin-left: 0.5rem;
          text-shadow: -3px -1px 21px rgba(108, 255, 215, 1);
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

      .animation-size-name:last-of-type {
        background: white;
      }

      .end-animation {
        transform: scale(250);
      }

      @media screen and (max-width: 1200px) {
        .background-animation {
          background-size: 350% contain;

          span {
            font-size: 1.7em;
          }
        }
      }

      @media screen and (max-width: 856px) {
        .background-animation {
          background-size: 350% contain;

          span {
            font-size: 1.5em;
          }
        }
      }

      @media screen and (max-width: 600px) {
        .background-animation {
          background-size: 350% contain;

          span {
            font-size: 1.3em;
            left: 38.8%;
          }
        }
      }

      @media screen and (max-width: 456px) {
        .background-animation {
          background-size: 350% contain;

          span {
            font-size: 1.2em;
          }
        }
      }
    `,
  ],
})
export class AnimationComponent implements OnInit {
  animation: IAnimation = {
    deleteCharEffect: false,
    buttonAnimation: false,
    buttonStart: setInterval(
      () => (this.animation.buttonAnimation = !this.animation.buttonAnimation),
      1000
    ),
    hideButton: true,
    closeAnimation: false,
  };
  text: string = 'Francesco.exe';
  textSplit: string[] = this.text.split('');

  constructor(
    private router: Router,
    private changeDetection: ChangeDetectorRef,
    private accessHome: AccessHomeService
  ) {}

  ngOnInit(): void {}

  test() {
    let i = 13;
    const text = 'Francesco.exe';
    // const nameAnimation = setInterval(() => {
    /* this.text2 = this.text2.substr(0, this.text2.length -1)
          i--
          if(i < 0) { clearInterval(nameAnimation) }
        }
        , 50);*/
    const nameAnimation = setInterval(() => {
      this.textSplit.pop();
      i--;
      if (i < 0) {
        clearInterval(nameAnimation);
      }
    }, 55);
  }
  public endAnimation(): void {
    this.router.navigateByUrl('/home')
    this.animation.deleteCharEffect = true;

    setTimeout(() => this.test(), 300);

    this.animation.hideButton = false;

    if (!this.animation.hideButton) {
      clearInterval(this.animation.buttonStart);
    }

    setTimeout(() => {
      this.animation.closeAnimation = true;
    }, 2000);

    this.accessHome.setAccessToHome(true);

    setTimeout(() => this.router.navigateByUrl('/home'), 2300);
  }
}
