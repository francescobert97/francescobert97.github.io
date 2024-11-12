import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

      <div class="container-fluid  h-100 p-0">
        <router-outlet></router-outlet>
      </div>
  `,
  styles: [``]
})
export class AppComponent {
  title = 'myportfolio';
}
