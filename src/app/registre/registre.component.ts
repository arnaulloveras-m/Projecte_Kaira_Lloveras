import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {

  /*Fa que sigui obligatori omplir els següents camps del registre.*/
  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });


  constructor(private router: Router) {}

  registerUser() {
    localStorage.setItem('register', JSON.stringify(this.registerForm.value))
    this.router.navigate(['login'])
  }
}
