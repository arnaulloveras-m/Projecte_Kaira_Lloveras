import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit{
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onLogin() {
    console.log(this.loginForm.value);
    localStorage.setItem('infoForm', JSON.stringify(this.loginForm.value));
  }

  @ViewChild('ViewChild') ViewChild!: ElementRef;
  ngAfterViewInit() {
    this.ViewChild.nativeElement.value = '@gmail.com'
  }

}
