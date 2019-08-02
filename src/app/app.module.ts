import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomepageComponent } from './homepage/homepage.component';

import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
