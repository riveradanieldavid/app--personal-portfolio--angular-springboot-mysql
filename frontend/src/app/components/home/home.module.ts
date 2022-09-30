// HOW MUST BE  REGISTER COMPONENTS IN HIS MODULE SO THAT RUN ALSO, THESE DUE BE UNREGISTERED IF THE PREVIOUSLY REGISTERED COMPONENT IS ELIMINATED...
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// THIS COUPLE OF BELOW WAS NOT REGISTERED!. WAS REQUIRED SO TO home COMPONENT TO CONTAIN OTHERS COMPONENTS
import { HomeComponent } from './home.component';

// THIS TO RUN banner add edit
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';

// THIS WAS THE LAST BUG LEFTOVER TO SOLVE
import { RouterModule, Routes } from '@angular/router';
// THIS TO RUN banner add edit /

// THIS TO RUN banner add edit
import { BannerComponent } from './banner/banner.component';
import { BannerDetailsComponent } from './banner/banner-details/banner-details.component';
import { AddBannerComponent } from './banner/add-banner/add-banner.component';
import { BannerTextComponent } from './banner/banner-text/banner-text.component';
import { BannerImageComponent } from './banner/banner-image/banner-image.component';
// THIS TO RUN banner add edit /

import { AboutComponent } from './about/about.component';
import { AboutDetailsComponent } from './about/about-details/about-details.component';
import { AddAboutComponent } from './about/add-about/add-about.component';
import { AboutImageComponent } from './about/about-image/about-image.component';
import { AboutTextComponent } from './about/about-text/about-text.component';

import { ExperienceComponent } from './experience/experience.component';
import { ExperienceDetailsComponent } from './experience/experience-details/experience-details.component';
import { AddExperienceComponent } from './experience/add-experience/add-experience.component';
import { ExperienceImageComponent } from './experience/experience-image/experience-image.component';
import { ExperienceTextComponent } from './experience/experience-text/experience-text.component';

import { EducationComponent } from './education/education.component';
import { EducationDetailsComponent } from './education/education-details/education-details.component';
import { AddEducationComponent } from './education/add-education/add-education.component';
import { EducationImageComponent } from './education/education-image/education-image.component';
import { EducationTextComponent } from './education/education-text/education-text.component';

import { SkillComponent } from './skill/skill.component';
import { SkillDetailsComponent } from './skill/skill-details/skill-details.component';
import { AddSkillComponent } from './skill/add-skill/add-skill.component';

import { ProjectComponent } from './project/project.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { ProjectsImageComponent } from './project/project-image/project-image.component';
import { ProjectsTextComponent } from './project/project-text/project-text.component';

import { ContactComponent } from './contact/contact.component';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';






import { RoutingComponent } from './routing/routing.component';



@NgModule({
  declarations: [

    // THIS TO RUN banner add edit
    HomeComponent,

    BannerComponent,
    BannerDetailsComponent,
    AddBannerComponent,
    BannerImageComponent,
    BannerTextComponent,
    // THIS TO RUN banner add edit /

    AboutComponent,
    AboutDetailsComponent,
    AddAboutComponent,
    AboutImageComponent,
    AboutTextComponent,

    ExperienceComponent,
    ExperienceDetailsComponent,
    AddExperienceComponent,
    ExperienceImageComponent,
    ExperienceTextComponent,

    EducationComponent,
    EducationDetailsComponent,
    AddEducationComponent,
    EducationImageComponent,
    EducationTextComponent,

    SkillComponent,
    SkillDetailsComponent,
    AddSkillComponent,

    ProjectComponent,
    ProjectDetailsComponent,
    AddProjectComponent,
    ProjectsImageComponent,
    ProjectsTextComponent,

    ContactComponent,
    ContactDetailsComponent,
    AddContactComponent,

    RoutingComponent

  ],

  imports: [
    CommonModule,

    // THIS TO RUN banner add edit
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    // THIS TO RUN banner add edit /

  ],
  exports: [
    // THIS TO RUN HomeModule
    HomeComponent,
    // THIS TO RUN HomeModule /

    // BannerComponent,
    // BannerDetailsComponent,

  ]

})
export class HomeModule { }









