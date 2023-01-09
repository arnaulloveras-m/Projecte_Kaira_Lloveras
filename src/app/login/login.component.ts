import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerData: object = {}
  emailRegister: string = ''
  passwordRegister: string = ''
  invalidCredentials: boolean = false

  /*Validar el correu i la contrasenya a l'apartat de Log.*/
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private router: Router) {}

  /*Mira si les dades del correu i la contrasenya que hi ha al registre coincideixen amb el Log.*/
  ngOnInit(): void {
    this.registerData = JSON.parse(localStorage.getItem("register") || '')
    Object.entries(this.registerData).forEach(([key, value]) => {
      if (key == 'email') {
        this.emailRegister = value
      }
      if (key == 'password') {
        this.passwordRegister = value
      }
    })
  }

  onLogin() {
    console.log(this.loginForm.value);
    if (
      this.loginForm.value.email == this.emailRegister &&
      this.loginForm.value.password == this.passwordRegister
    ) {
      this.invalidCredentials = false
      localStorage.setItem('isLogin', "true");
      this.router.navigate(['index'])
    } else {
      this.invalidCredentials = true
    }
  }

  hideErrorMsg() {
    this.invalidCredentials = false
  }
}
