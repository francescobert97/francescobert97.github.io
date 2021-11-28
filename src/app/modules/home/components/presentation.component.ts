import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  template: `
    <div  class="presentation my-5">
      <div class="profile-video">
        <video src="../../../../assets/template/presentation-video.mp4" autoplay muted loop></video>
          <div class="profile-picture d-flex justify-content-center align-items-center">
              <div>
                <img src="../../../../assets/template/profile-picture2.png" alt="">
              </div>
          </div>
      

        <div class="biography">
          <p class="">
            Sono Francesco e sono uno sviluppatore web Front-end, la tecnologia mi ha sempre appassionato,
            mi affascina molto di questo mondo la possibilità di rendere ogni cosa realtà, è un po' come ricevere dei superpoteri,
            ho quindi iniziato a formarmi come web developer prima in autonomia e poi seguendo un corso,
            punto a diventare uno sviluppatore completo un giorno.</p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    .presentation {
      position: relative;
      overflow: hidden;
      width: 92%;
      height: 80%;
      border-radius: 70px;
      box-shadow: 0px 0px 22px 4px #37DBD6;
      margin: 0 3rem;

      .profile-video {
        width: 100%;

        video{
          border-radius: 70px;
          width: 100%;
          height: 100%;
          
        }

        .profile-picture {
          width: 21rem;
          height: 21rem;
          transform: rotate(312deg);
          box-shadow: 0px 0px 22px 4px #37DBD6;
          background: url('../../../../assets/template/picture-window2.png') center;
          background-size: 101%;
          position: absolute;
          border: 1px solid black;
          z-index: 10;
          top: 12%;
          left: 0;
          div:first-child {
            overflow: hidden;
            width: 63%;
            height: 63%;
            border-radius: 50px;
            transform: rotate(47deg);
            box-shadow: 0px 0px 22px 4px #37DBD6;
            background: black;
            img {
              
              width: 100%;
              height: 180%;
            }
          }
  
        }

        .biography {
          position: absolute;
          box-shadow: 0px 0px 22px 4px #37DBD6;
          background: rgba(0, 0, 0, 0.766);
          width: 40%;
          padding: 2rem;
          top: 6%;
          left: 55%;
          font-size: 1.2em;
          border-radius: 20px;
        }

      }

    }

    @media screen and (max-width: 856px) {
      .presentation {
        height: 75%;
        margin: 0 1.9rem;

        .profile-video {

          .profile-picture {
            width: 14rem;
            height: 14rem;
          }

          .biography {
            padding: 1.5rem;
            top: 7%;
            font-size: 0.9em;
          }
        }
      }
    }

    @media screen and (max-width: 600px) {
      .presentation {
        height: 65%;
        margin: 0 1.4rem;
        .profile-video {
          .profile-picture {
            top: 18%;
            left: -2%;
            width: 10rem;
            height: 10rem;
          }

          .biography {
            padding: 1.2rem;
            top: 7%;
            left: 52%;
            font-size: 0.6em;
          }
        }
      }
    }

    @media screen and (max-width: 456px) {
      .presentation {
        height: 62%;
        margin: 0 1.4rem;
        .profile-video {
          .profile-picture {
            top: 18%;
            left: -1.5%;
            width: 7rem;
            height: 7rem;
          }

          .biography {
            width: 45%;
            padding: 1.2rem;
            top: 7%;
            left: 47%;
            font-size: 0.4em;
          }
        }
      }
    }
    `
  ]
})
export class PresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
