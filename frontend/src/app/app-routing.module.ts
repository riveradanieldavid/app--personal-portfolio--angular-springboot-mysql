import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
// "routes" CONST USES "Routes" FROM "@angular/router"
// MAKES VISIBLE "routing.component.html" FILE  WHICH CONTAINS  COMPONENTS OF VIEWS
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// AQUI SE DECIDE QUE COMPONENTE/S SERVIRAN DE CONETENEDORES DE OTROS COMPONENTES...
// AL ESTABLECER NUEVO COMPONENTE CONTENEDOR... SE DEBE REGISTRAR AL RESTO DE COMPONENTES A SOLICITAR...
// THIS  "import" IMPLEMENTS THE CHILDS COMPONENTS OF "app.comoponent.html"
// import { HomeComponent } from './components/home/home.component';
// THE COMPONENT ON TOP ALREADY CONTAINS ALL CHILDS OF "app.comoponent.html"
