import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ApplicationViewComponent } from './application-view/application-view.component';
 
const routes: Routes = [
  {path: '', redirectTo: '/login-page', pathMatch: 'full' },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'application-view', component: ApplicationViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
