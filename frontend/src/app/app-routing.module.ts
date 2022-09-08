import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

import { AboutComponent } from './components/home/about/about.component';
import { AboutDetailsComponent } from './components/home/about/about-details/about-details.component';
import { AddAboutComponent } from './components/home/about/add-about/add-about.component';

import { BannerComponent } from './components/home/banner/banner.component';
import { BannerDetailsComponent } from './components/home/banner/banner-details/banner-details.component';
import { AddBannerComponent } from './components/home/banner/add-banner/add-banner.component';

import { ExperienceComponent } from './components/home/experience/experience.component';
import { ExperienceDetailsComponent } from './components/home/experience/experience-details/experience-details.component';
import { AddExperienceComponent } from './components/home/experience/add-experience/add-experience.component';

// "routes" CONST USES "Routes" FROM "@angular/router"
// MAKES VISIBLE "routing.component.html" FILE  WHICH CONTAINS  COMPONENTS OF VIEWS
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },

  { path: 'abouts', component: AboutComponent },
  { path: 'about/:id', component: AboutDetailsComponent },
  { path: 'abouts/add', component: AddAboutComponent },

  { path: 'banners', component: BannerComponent },
  { path: 'banner/:id', component: BannerDetailsComponent },
  { path: 'banners/add', component: AddBannerComponent },

  { path: 'experiences', component: ExperienceComponent },
  { path: 'experience/:id', component: ExperienceDetailsComponent },
  { path: 'experiences/add', component: AddExperienceComponent },

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
