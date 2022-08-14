import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// AQUI SE DECIDE QUE COMPONENTE/S SERVIRAN DE CONETENEDORES DE OTROS COMPONENTES...
// THIS  "import" IMPLEMENTS THE CHILDS COMPONENTS OF "app.comoponent.html"
import { HomeComponent } from './components/home/home.component';
// THE COMPONENT ON TOP ALREADY CONTAINS ALL CHILDS OF "app.comoponent.html"

// "routes" CONST USES "Routes" FROM "@angular/router"
// MAKES VISIBLE "routing.component.html" FILE  WHICH CONTAINS  COMPONENTS OF VIEWS
const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
