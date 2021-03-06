import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAccessGuard } from '../core/home-access.guard';
import { ProjectGuard } from '../core/project.guard';
import { HomeComponent } from './pages/home-container.component';
import { ProjectSearchListComponent } from './pages/project-search-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [HomeAccessGuard]},
  { path: 'result/:id', component: ProjectSearchListComponent, canActivate: [ProjectGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
