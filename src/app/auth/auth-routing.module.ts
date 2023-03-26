import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =[

  {path:'auth',
    children:[
      {path:'register',component:RegisterComponent},
      {path:'login',component:LoginComponent},
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[

  ]
})
export class AuthRoutingModule { }
