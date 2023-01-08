import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  username: string = 'Sali';
  isLogged: boolean = false;

  constructor(private authService: AuthService,) {}

  ngOnInit(): void {
    this.isLogged = this.authService.isLogged()
    console.log(this.isLogged)
  }
}
