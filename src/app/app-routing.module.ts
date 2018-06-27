import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderComponent} from './order/order.component';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'main', component: MainComponent ,
    children:[
      { path: '', component: DashboardComponent },
      { path: 'order', component: OrderComponent },
      { path: 'dashboard', component: DashboardComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
