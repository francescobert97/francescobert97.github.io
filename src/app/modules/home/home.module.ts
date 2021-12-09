import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home-container.component';
import { AnimationComponent } from './components/animation.component';
import { PresentationComponent } from './components/presentation.component';
import { TechStackComponent } from './components/tech-stack.component';
import { SocialBarComponent } from './components/social-bar.component';
import { ProjectListComponent } from './components/project-list.component';
import { ProjectSearchListComponent } from './pages/project-search-list.component';
import { ProjectSearchBarComponent } from './components/project-search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectCardComponent } from './components/project-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    AnimationComponent,
    PresentationComponent,
    TechStackComponent,
    SocialBarComponent,
    ProjectListComponent,
    ProjectSearchListComponent,
    ProjectSearchBarComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
