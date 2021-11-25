import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home-container.component';
import { AnimationComponent } from './components/animation.component';


@NgModule({
  declarations: [
    HomeComponent,
    AnimationComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
