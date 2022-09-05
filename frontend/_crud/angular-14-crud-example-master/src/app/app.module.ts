import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/home/tutorials/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/home/tutorials/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/home/tutorials/tutorials-list/tutorials-list.component';
import { AboutComponent } from './components/home/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { TutorialsComponent } from './components/home/tutorials/tutorials.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    AboutComponent,
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
