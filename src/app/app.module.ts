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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexComponent,
    FooterComponent,
    CatalegComponent,
    CistellaComponent,
    ContacteComponent,
    RegistreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
