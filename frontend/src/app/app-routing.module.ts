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

import { ProjectComponent } from './components/home/project/project.component';
import { ProjectDetailsComponent } from './components/home/project/project-details/project-details.component';
import { AddProjectComponent } from './components/home/project/add-project/add-project.component';

import { EducationComponent } from './components/home/education/education.component';
import { EducationDetailsComponent } from './components/home/education/education-details/education-details.component';
import { AddEducationComponent } from './components/home/education/add-education/add-education.component';

import { SkillComponent } from './components/home/skill/skill.component';
import { SkillDetailsComponent } from './components/home/skill/skill-details/skill-details.component';
import { AddSkillComponent } from './components/home/skill/add-skill/add-skill.component';

import { ContactComponent } from './components/home/contact/contact.component';
import { ContactDetailsComponent } from './components/home/contact/contact-details/contact-details.component';
import { AddContactComponent } from './components/home/contact/add-contact/add-contact.component';

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

  { path: 'projects', component: ProjectComponent },
  { path: 'project/:id', component: ProjectDetailsComponent },
  { path: 'projects/add', component: AddProjectComponent },

  { path: 'educations', component: EducationComponent },
  { path: 'education/:id', component: EducationDetailsComponent },
  { path: 'educations/add', component: AddEducationComponent },

  { path: 'skills', component: SkillComponent },
  { path: 'skill/:id', component: SkillDetailsComponent },
  { path: 'skills/add', component: AddSkillComponent },

  { path: 'contacts', component: ContactComponent },
  { path: 'contact/:id', component: ContactDetailsComponent },
  { path: 'contacts/add', component: AddContactComponent },

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
