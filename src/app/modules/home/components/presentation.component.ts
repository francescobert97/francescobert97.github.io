import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  template: `
    <div id="presentation" class="w-100 d-flex justify-content-around">

        <div class="profile-picture">
            FOTO PROFILO
        </div>

        <div class="biography text-center">
          <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vitae, aliquid unde nisi inventore voluptate facilis eveniet placeat! Quasi temporibus obcaecati quam atque sunt distinctio et nihil consectetur exercitationem earum.</p>
        </div>

    </div>
  `,
  styles: [
    `
    #presentation {
      padding: 3rem;
      
     .profile-picture {
       border: 1px solid black;
       width: 250px; 
       height: 150px;
       border-radius: 20px 100px 20px 150px;
       box-shadow: 0px 0px 22px 14px #37DBD6;
     }

     .biography {
      box-shadow: 0px 0px 22px 14px #37DBD6;
       width: 50%;
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
