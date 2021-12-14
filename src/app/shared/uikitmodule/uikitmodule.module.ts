import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from '../components/error-page.component';
import { ScrollbarComponent } from '../components/scrollbar.component';



@NgModule({
  declarations: [
    ErrorPageComponent,
    ScrollbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScrollbarComponent
  ]
})
export class UikitmoduleModule { }
