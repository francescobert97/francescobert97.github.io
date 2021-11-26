import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home-container.component';
import { AnimationComponent } from './components/animation.component';
import { PresentationComponent } from './components/presentation.component';
import { TechStackComponent } from './components/tech-stack.component';


@NgModule({
  declarations: [
    HomeComponent,
    AnimationComponent,
    PresentationComponent,
    TechStackComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
