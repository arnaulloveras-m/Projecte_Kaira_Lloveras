import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { CatalegComponent } from './cataleg/cataleg.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexComponent,
    FooterComponent,
    CatalegComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
