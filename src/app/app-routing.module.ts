import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistreComponent} from "./registre/registre.component";
import {IndexComponent} from "./index/index.component";
import {LoginComponent} from "./login/login.component";
import {ContacteComponent} from "./contacte/contacte.component";
import {CistellaComponent} from "./cistella/cistella.component";
import {CondicionsComponent} from "./condicions/condicions.component";
import {CatalegComponent} from "./cataleg/cataleg.component";
import {AuthGuardService} from "./auth/auth-guard.service";

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'registre', component: RegistreComponent },
  {path: 'login', component: LoginComponent},
  {path: 'contacte', component: ContacteComponent},
  {path: 'cistella', component: CistellaComponent, canActivate: [AuthGuardService]},
  {path: 'condicions', component: CondicionsComponent},
  {path: 'cataleg', component: CatalegComponent},
  {path: '', redirectTo: '/index', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
