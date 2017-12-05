import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { ContentComponent } from './content/content.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PlatformsComponent,
    ContentComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
