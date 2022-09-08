import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'loginn', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
