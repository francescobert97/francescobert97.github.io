import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from '../components/error-page.component';
import { ScrollbarComponent } from '../components/scrollbar.component';
import { ScrollDirective } from 'src/app/modules/core/directive/scroll.directive';
import { CustomButtonComponent } from '../components/custom-button.component';



@NgModule({
  declarations: [
    ErrorPageComponent,
    ScrollbarComponent,
    ScrollDirective,
    CustomButtonComponent

  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScrollbarComponent,
    ScrollDirective,
    CustomButtonComponent
  ]
})
export class UikitmoduleModule { }
