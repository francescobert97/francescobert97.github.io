import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home-container.component';
import { ProjectSearchListComponent } from './pages/project-search-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'result/:id', component: ProjectSearchListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
