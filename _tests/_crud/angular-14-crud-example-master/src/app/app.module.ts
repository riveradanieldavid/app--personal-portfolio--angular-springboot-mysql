import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialsComponent } from './components/home/tutorials/tutorials.component';
import { TutorialDetailsComponent } from './components/home/tutorials/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/home/tutorials/add-tutorial/add-tutorial.component';
import { AboutComponent } from './components/home/about/about.component';
import { AboutDetailsComponent } from './components/home/about/about-details/about-details.component';
import { AddAboutComponent } from './components/home/about/add-about/add-about.component';

import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialsComponent,
    TutorialDetailsComponent,
    AddTutorialComponent,
    AboutComponent,
    AboutDetailsComponent,
    AddAboutComponent,
    HomeComponent,
    TutorialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
