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
import { RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CondicionsComponent} from "./condicions/condicions.component";

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
  //import2
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'index', component: IndexComponent},
      {path: 'login', component: LoginComponent},
      {path: 'contacte', component: ContacteComponent},
      {path: 'registre', component: RegistreComponent},
      {path: 'cistella', component: CistellaComponent},
      {path: 'condicions', component: CondicionsComponent},
      {path: 'cataleg', component: CatalegComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
