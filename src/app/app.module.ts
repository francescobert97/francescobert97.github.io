import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimationComponent } from './modules/landing/pages/animation.component';
import { UikitmoduleModule } from './shared/uikitmodule/uikitmodule.module';


@NgModule({
  declarations: [
    AppComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UikitmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
