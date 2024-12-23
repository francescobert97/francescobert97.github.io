import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home-container.component';
import { PresentationComponent } from './components/presentation.component';
import { TechStackComponent } from './components/tech-stack.component';
import { SocialBarComponent } from './components/social-bar.component';
import { ProjectListComponent } from './components/project-list.component';
import { ProjectSearchListComponent } from './pages/project-search-list.component';
import { ProjectSearchBarComponent } from './components/project-search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectCardComponent } from './components/project-card.component';
import { UikitmoduleModule } from 'src/app/shared/uikitmodule/uikitmodule.module';
import { ProjectsCardComponent } from './components/projects-card.component';
import { LinksBarComponent } from './components/links-bar.component';


@NgModule({
  declarations: [
    HomeComponent,
    PresentationComponent,
    TechStackComponent,
    SocialBarComponent,
    ProjectListComponent,
    ProjectSearchListComponent,
    ProjectSearchBarComponent,
    ProjectCardComponent,
    ProjectsCardComponent,
    LinksBarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UikitmoduleModule,
  ]
})
export class HomeModule { }
