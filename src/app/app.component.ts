import { Component } from '@angular/core';
import {Router } from'@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adminpro';

  constructor( public router :Router){}

  homepage(){
    this.router.navigate(['./homepage']);
  }
}
