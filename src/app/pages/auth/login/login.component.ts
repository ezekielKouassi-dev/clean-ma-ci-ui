import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  ngOnInit(): void {
       
  }

  constructor(private route : Router ) {}

  signIn() {
    return this.route.navigate(['/userPlateform']);
  }

}
