import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from '../components/error-page.component';
import { ScrollbarComponent } from '../components/scrollbar.component';
import { CustomButtonComponent } from '../components/custom-button.component';



@NgModule({
  declarations: [
    ErrorPageComponent,
    ScrollbarComponent,
    CustomButtonComponent

  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScrollbarComponent,
    CustomButtonComponent
  ]
})
export class UikitmoduleModule { }
