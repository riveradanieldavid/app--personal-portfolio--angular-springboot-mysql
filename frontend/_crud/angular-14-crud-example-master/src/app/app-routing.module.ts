import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsComponent } from './components/home/tutorials/tutorials.component';
import { TutorialDetailsComponent } from './components/home/tutorials/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/home/tutorials/add-tutorial/add-tutorial.component';
import { AboutComponent } from './components/home/about/about.component';
import { AboutDetailsComponent } from './components/home/about/about-details/about-details.component';
import { AddAboutComponent } from './components/home/about/add-about/add-about.component';

import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: 'tutorials', component: TutorialsComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'tutorial/add', component: AddTutorialComponent },
  { path: 'abouts', component: AboutComponent },
  { path: 'abouts/:id', component: AboutDetailsComponent },
  { path: 'about/add', component: AddAboutComponent },
  // { path: '', component: TutorialsComponent },
  // { path: '', redirectTo: 'tutorials', pathMatch: 'full' },

  { path: '', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }