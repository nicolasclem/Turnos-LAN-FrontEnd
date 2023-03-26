import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotpagesfoundComponent } from './notpagesfound/notpagesfound.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';


const routes: Routes = [

  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'**',component:NotpagesfoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
