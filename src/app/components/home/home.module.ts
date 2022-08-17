// HOW MUST BE  REGISTER COMPONENTS IN HIS MODULE SO THAT RUN ALSO, THESE DUE BE UNREGISTERED IF THE PREVIOUSLY REGISTERED COMPONENT IS ELIMINATED...
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
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



@NgModule({
  declarations: [
    AboutComponent,
    BannerComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    HomeComponent,
    ContactComponent,
    ArticleGeneralExperienceComponent,
    ArticleImageComponent,
    ArticleTextComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }












/* import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingComponent } from './routing/routing.component';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home.component';

// IMPORTANDO Y DECLARANDO AQUI, ESTOS COMPONENTES PUEDEN PONERSE EN "routing.component.html"
// PREVIAMENTE TUVIERON QUE SER EXPORTADOS DESDE SU MODULO "general.module.ts"
// EN PRINCIPIO ESTOS MÓDULOS FORANEOS FUERON IMPORTADOS DESDE "app.module.ts"
// PUDIENDO PONER ESTOS COMPONENTES FORANEOS EN "app.component.html"
// ES DE UNA O DE OTRA FORMA
import { HeaderComponent } from '../general/header/header.component';
import { FooterComponent } from '../general/footer/footer.component';

@NgModule({
  declarations: [
    RoutingComponent,
    AboutComponent,
    BannerComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    HomeComponent,

    // IMPORTANDO Y DECLARANDO AQUI, ESTOS COMPONENTES PUEDEN PONERSE EN "routing.component.html" 
    // PREVIAMENTE TUVIERON QUE SER EXPORTADOS DESDE  "general.module.ts"
    // EN PRINCIPIO ESTOS MÓDULOS FORANEOS FUERON IMPORTADOS DESDE "app.module.ts"
    // PUDIENDO PONER ESTOS COMPONENTES FORANEOS EN "app.component.html"
    // ES DE UNA O DE OTRA FORMA
    // HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }







 */