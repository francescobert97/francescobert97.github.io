import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ElementRef,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';
import { AccessHomeService } from 'src/app/shared/services/access-home.service';

export interface IAnimation {
  closeAnimation: boolean;
}

@Component({
  selector: 'app-animation',
  template: `
  <video [class]="animation.closeAnimation ? 'end-animation' : null" #videoAnimation playsinline muted class="vh-100 vw-100 bg-animation" src="../assets/template/96c63244-766f-429a-a41f-c497d7a1d66f_restream.webm" ></video>
    <div class="wh-100 background-animation d-flex justify-content-center align-items-center">
        <button [class]="animation.closeAnimation ? 'end-animation' : null"
          class="btn text-light text-shadow-green"
          (click)="endAnimation()"
        >
          {{text}}
        </button>

    </div>
  `,
  styles: [
    `
      .bg-animation {
    z-index: -1;
    position: absolute;
    object-fit: cover;
    transition: 3s;
  }
      .background-animation {
        transition: 1.7s;
        background-size: cover;
        height: 100vh;

        button {
          padding: 3.5rem;
          margin-left: 2.9rem;
          font-size: 2em;
          border: 1px solid aqua;
          transition: 1s;
          animation: lightBtn 1.2s infinite;
          &:hover {
            background: rgba(0, 255, 255, 0.774);
            text-shadow: var(--text-shadow-green)
          }
        }
      }

      .end-animation {
        transform: scale(300);
      }

      @keyframes lightBtn {
        from {
          background: rgba(0, 255, 255, 0.374);
          box-shadow: -3px -1px 21px rgba(108, 255, 215, 1);
        }
        to {

        }

      }

      @media screen and (max-width: 600px) {
        .background-animation {
          button {
            font-size: 1.6em;
            padding: 1.2rem;
            margin-left: 1.7rem;
          }
        }
      }
    `,
  ],
})
export class AnimationComponent implements OnInit {
  @ViewChild('videoAnimation', { static: false }) videoRef!: ElementRef<HTMLVideoElement>;

  animation: IAnimation = {
    closeAnimation: false,
  };
  text: string = 'START';

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
  }


  public endAnimation(): void {
    console.log('qui ci siamo')
    const time= 3000;
    const videoElement = this.videoRef.nativeElement;
    videoElement.loop = true;
    videoElement.play();
    this.text = 'LOAD';

  const animationActions =  timer(time).pipe(
      tap(() => this.animation.closeAnimation = true),
      concatMap(() =>
      timer(150).pipe(
        tap(() => {
          localStorage.setItem('homeAccess', JSON.stringify({access: true}))

          this.animation.closeAnimation?
          this.router.navigateByUrl('/home') : this.router.navigateByUrl('/error');
        })
      )
    ))

    animationActions.subscribe();

  }
}
