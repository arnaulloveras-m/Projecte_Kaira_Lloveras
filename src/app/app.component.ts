import { Component } from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {ServeiService} from "./serveis/servei.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServeiService]
})
export class AppComponent {
  title = 'Projecte_Kaira_Lloveras';

  constructor(private authService: AuthService) {}

  reloadPageIfIsLogged() {
    let isLogged = this.authService.isLogged()

    if (isLogged) {
      let isLoadedBefore = localStorage.getItem("IsLoadedBefore")
      if (!isLoadedBefore) {
        localStorage.setItem("IsLoadedBefore", "true");
        window.location.reload()
      }
    }
  }
}
