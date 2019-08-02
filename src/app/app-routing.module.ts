import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from '../app/loginpage/loginpage.component';
import { from } from 'rxjs';
import { HomepageComponent } from './homepage/homepage.component';
 
const routes: Routes = [
  {
    path : '',
    component : HomepageComponent
  }
  ,
  {
    path : 'login',
    component : LoginpageComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
