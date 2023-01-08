import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onLogin() {
    console.log(this.loginForm.value);
    localStorage.setItem('infoForm', JSON.stringify(this.loginForm.value));
  }
}
