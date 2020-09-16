import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardResponsiveComponent } from './card-responsive/card-responsive.component';
import { CarouselComponent } from './carousel/carousel.component';
import { VestirHombreComponent } from './vestir-hombre/vestir-hombre.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { LoggedGuard } from './services/logged.guard';


const routes: Routes = [

  {path:'actividades/listar', component:CardResponsiveComponent},
  {path:'', component:LoginComponent, canActivate: [LoggedGuard]},
  {path:'actividades/vestir', component:VestirHombreComponent},
  {path:'actividades/principal', component:CarouselComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
