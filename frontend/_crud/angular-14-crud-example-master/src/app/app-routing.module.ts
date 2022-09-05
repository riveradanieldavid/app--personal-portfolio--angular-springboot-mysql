import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/home/tutorials/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/home/tutorials/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/home/tutorials/add-tutorial/add-tutorial.component';
// import { AboutComponent } from "./components/about/about.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  // { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'tutorial/add', component: AddTutorialComponent },
  // { path: '', component: TutorialsListComponent },

  { path: '', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }