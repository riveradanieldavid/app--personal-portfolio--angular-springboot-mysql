import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// THIS  "import" IMPLEMENTS THE CHILDS COMPONENTS OF "app.comoponent.html"
import { RoutingComponent } from './components/home/routing/routing.component';
// THE COMPONENT ON TOP ALREADY CONTAINS ALL CHILDS OF "app.comoponent.html"

// "routes" CONST USES "Routes" FROM "@angular/router"
// MAKES VISIBLE "routing.component.html" FILE  WHICH CONTAINS  COMPONENTS OF VIEWS
const routes: Routes = [
  { path: '', component: RoutingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
