import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CardResponsiveComponent } from "./card-responsive/card-responsive.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { VestirHombreComponent } from "./vestir-hombre/vestir-hombre.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./services/auth.guard";
import { LoggedGuard } from "./services/logged.guard";
import { AsistenteLearnComponent } from "./asistente-learn/asistente-learn.component";
import { MenuComponent } from "./menu/menu.component";
import { JuegoComponent } from "./juego/juego.component";
import { InstruccionesComponent } from './instrucciones/instrucciones.component';
import { HygieneAntistressSkillComponent } from './hygiene-antistress-skill/hygiene-antistress-skill.component';
import { SandwichMotorSkillsComponent } from './sandwich-motor-skills/sandwich-motor-skills.component';
import { CleannessFineMotorComponent } from './cleanness-fine-motor/cleanness-fine-motor.component';

const routes: Routes = [
  { path: "", component: LoginComponent, canActivate: [LoggedGuard] },
  { path: "actividades/asistente", component: AsistenteLearnComponent },
  
  // {path:'actividades/vestir', component:VestirHombreComponent},

  {
    path: "",
    canActivate: [AuthGuard],
    component: MenuComponent,
    children: [
      { path: "actividades/listar", component: CardResponsiveComponent },
      { path: "actividades/principal", component: CarouselComponent },
      { path: "actividades/vestir", component: JuegoComponent },
      { path: "actividades/dientes", component: HygieneAntistressSkillComponent },
  { path: "actividades/sandwich", component: SandwichMotorSkillsComponent },
  { path: "actividades/mesa", component: CleannessFineMotorComponent },
      {path:'actividades/instrucciones', component: InstruccionesComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
