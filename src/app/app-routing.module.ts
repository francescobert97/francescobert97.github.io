import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './modules/landing/pages/animation.component';
import { ErrorPageComponent } from './shared/components/error-page.component';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'landing', component: AnimationComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full'},
  { path: 'error', component: ErrorPageComponent},
  { path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
