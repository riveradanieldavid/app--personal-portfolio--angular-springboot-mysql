// HOW MUST BE  REGISTER COMPONENTS IN HIS MODULE SO THAT RUN ALSO, THESE DUE BE UNREGISTERED IF THE PREVIOUSLY REGISTERED COMPONENT IS ELIMINATED...
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
// THIS COUPLE OF BELOW WAS NOT REGISTERED!. WAS REQUIRED SO TO home COMPONENT TO CONTAIN OTHERS COMPONENTS
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact/contact.component';
import { ArticleGeneralExperienceComponent } from './sharedComponents/article-general-experience/article-general-experience.component';
import { ArticleImageComponent } from './sharedComponents/article-general-experience/article-image/article-image.component';
import { ArticleTextComponent } from './sharedComponents/article-general-experience/article-text/article-text.component';
import { AboutImageComponent } from './about/about-image/about-image.component';
import { AboutTextComponent } from './about/about-text/about-text.component';
import { ExperienceImageComponent } from './experience/experience-image/experience-image.component';
import { ExperienceTextComponent } from './experience/experience-text/experience-text.component';
import { EducationImageComponent } from './education/education-image/education-image.component';
import { EducationTextComponent } from './education/education-text/education-text.component';
import { ProjectsImageComponent } from './projects/projects-image/projects-image.component';
import { ProjectsTextComponent } from './projects/projects-text/projects-text.component';



@NgModule({
  declarations: [
    // AboutComponent,
    BannerComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    HomeComponent,
    ContactComponent,
    ArticleGeneralExperienceComponent,
    ArticleImageComponent,
    ArticleTextComponent,
    AboutImageComponent,
    AboutTextComponent,
    ExperienceImageComponent,
    ExperienceTextComponent,
    EducationImageComponent,
    EducationTextComponent,
    ProjectsImageComponent,
    ProjectsTextComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }









