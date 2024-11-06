import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from '../components/error-page.component';
import { ScrollbarComponent } from '../components/scrollbar.component';
import { ScrollDirective } from 'src/app/modules/core/directive/scroll.directive';



@NgModule({
  declarations: [
    ErrorPageComponent,
    ScrollbarComponent,
    ScrollDirective

  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScrollbarComponent,
    ScrollDirective
  ]
})
export class UikitmoduleModule { }
