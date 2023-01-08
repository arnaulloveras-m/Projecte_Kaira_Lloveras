import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  registerData: object = {}
  username: string = '';
  isLogged: boolean = false;

  constructor(private authService: AuthService,) {}

  ngOnInit(): void {
    this.isLogged = this.authService.isLogged()
    console.log(this.isLogged)
    if (this.isLogged) {
      this.registerData = JSON.parse(localStorage.getItem("register") || '')
      Object.entries(this.registerData).forEach(([key, value]) => {
        if (key == 'name') {
          this.username = value
        }
      })
    }
  }

  logOut() {
    localStorage.removeItem('isLogin')
    localStorage.removeItem('IsLoadedBefore')
    window.location.reload()
  }
}
