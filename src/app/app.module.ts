import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { CatalegComponent } from './cataleg/cataleg.component';
import {CistellaComponent} from "./cistella/cistella.component";
import {ContacteComponent} from "./contacte/contacte.component";
import {RegistreComponent} from "./registre/registre.component";
import {LoginComponent} from "./login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {AuthModule} from "./auth/auth.module";
import {ServeiService} from "./serveis/servei.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexComponent,
    LoginComponent,
    FooterComponent,
    CatalegComponent,
    CistellaComponent,
    ContacteComponent,
    RegistreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ReactiveFormsModule,
  ],
  providers: [ServeiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
