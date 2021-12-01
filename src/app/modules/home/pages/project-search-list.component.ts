import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-search-list',
  template: `
  <div class="d-flex flex-column justify-content-between align-items-center">
    <div class="my-4 ms-5  d-flex justify-content-start w-100">
      <button class="btn text-light" (click)="returnToHome()">Torna alla Home</button>
    </div>
    <div class="project-card-section d-flex flex-column justify-content-around align-items-center">
      <div class="card-title d-flex justify-content-center">
        <h2>Project title</h2>
      </div>
      <p>
        project long description
      </p>
      <div>
        project image slide
      </div>
    </div>
  </div>
  `,
  styles: [
    `
    .project-card-section {
      color: white;
      width: 95%;
      height: 85vh;
      background: rgba(0, 0, 0, 0.477);
      box-shadow: 0px 0px 22px -2px #37dbd6;
      border-radius: 10px;
      .card-title {
        width: 100%;
        height: 50%;
        background: red;
      }
    }
    `
  ]
})
export class ProjectSearchListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }

  public returnToHome() {
    this.router.navigateByUrl('home');
  }
}
