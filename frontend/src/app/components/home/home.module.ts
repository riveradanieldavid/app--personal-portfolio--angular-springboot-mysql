// HOW MUST BE  REGISTER COMPONENTS IN HIS MODULE SO THAT RUN ALSO, THESE DUE BE UNREGISTERED IF THE PREVIOUSLY REGISTERED COMPONENT IS ELIMINATED...
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AboutComponent } from './about/about.component';
// import { BannerComponent } from './banner/banner.component';
// import { ExperienceComponent } from './experience/experience.component';
// import { EducationComponent } from './education/education.component';
// import { SkillComponent } from './skill/skill.component';
// import { ProjectsComponent } from './project/project.component';
// THIS COUPLE OF BELOW WAS NOT REGISTERED!. WAS REQUIRED SO TO home COMPONENT TO CONTAIN OTHERS COMPONENTS
import { HomeComponent } from './home.component';
// import { ContactComponent } from './contact/contact.component';
import { ArticleGeneralExperienceComponent } from './sharedComponents/article-general-experience/article-general-experience.component';
import { ArticleImageComponent } from './sharedComponents/article-general-experience/article-image/article-image.component';
import { ArticleTextComponent } from './sharedComponents/article-general-experience/article-text/article-text.component';
import { AboutImageComponent } from './about/about-image/about-image.component';
import { AboutTextComponent } from './about/about-text/about-text.component';
import { ExperienceImageComponent } from './experience/experience-image/experience-image.component';
import { ExperienceTextComponent } from './experience/experience-text/experience-text.component';
import { EducationImageComponent } from './education/education-image/education-image.component';
import { EducationTextComponent } from './education/education-text/education-text.component';
import { ProjectsImageComponent } from './project/project-image/project-image.component';
import { ProjectsTextComponent } from './project/project-text/project-text.component';
import { RoutingComponent } from './routing/routing.component';



@NgModule({
  declarations: [
    // AboutComponent,
    // BannerComponent,
    // ExperienceComponent,
    // EducationComponent,
    // SkillComponent,
    // ProjectsComponent,
    HomeComponent,
    // ContactComponent,
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
    ProjectsTextComponent,
    RoutingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }









