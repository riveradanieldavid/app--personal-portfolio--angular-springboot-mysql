import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// NEW MODULES MUST BE DECLARED HERE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
// import { HomeComponent } from './components/home/home.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { HomeModule } from './components/home/home.module';
// import { GeneralModule } from './components/general/general.module'; // IMPORTING MODULE CAUSES RELOAD OF PAGE. BUT RUN
import { HeaderComponent } from './components/general/header/header.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { HomeEditComponent } from './components/home-edit/home-edit.component';

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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeEditComponent,
    AboutComponent,
    AboutDetailsComponent,
    AddAboutComponent,
    BannerComponent,
    BannerDetailsComponent,
    AddBannerComponent,
    ExperienceComponent,
    ExperienceDetailsComponent,
    AddExperienceComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    AddProjectComponent,
    EducationComponent,
    EducationDetailsComponent,
    AddEducationComponent,
    SkillComponent,
    SkillDetailsComponent,
    AddSkillComponent,
    ContactComponent,
    ContactDetailsComponent,
    AddContactComponent,

  ],
  // NEW MODULES MUST BE DECLARED HERE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // GeneralModule, // IMPORTING MODULE CAUSES RELOAD OF PAGE. BUT RUN
    HomeModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule { }
