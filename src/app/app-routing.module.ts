import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {RegistreComponent} from "./registre/registre.component";
import {IndexComponent} from "./index/index.component";

const routes: Routes = [
  { path: 'registre', component: RegistreComponent },
  {path: 'menu', component: MenuComponent},
  {path: 'index', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
