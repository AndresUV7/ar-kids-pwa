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
import { InstruccionesComponent } from "./instrucciones/instrucciones.component";
import { HygieneAntistressSkillComponent } from "./hygiene-antistress-skill/hygiene-antistress-skill.component";
import { SandwichMotorSkillsComponent } from "./sandwich-motor-skills/sandwich-motor-skills.component";
import { CleannessFineMotorComponent } from "./cleanness-fine-motor/cleanness-fine-motor.component";
import { UsersListComponent } from './users-list/users-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DePasoComponent } from './de-paso/de-paso.component';
import { ClasificaloComponent } from './clasificalo/clasificalo.component';
import { PremiosComponent } from './premios/premios.component';
import { PictoComponent } from './picto/picto.component';
import { ArBoxComponent } from './ar-box/ar-box.component';
import { PruebaComponent } from './prueba/prueba.component';
import { EncuentraloComponent } from './encuentralo/encuentralo.component';
import { HistorialComponent } from './historial/historial.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RecoverPassComponent } from './recover-pass/recover-pass.component';
import { SonigramComponent } from './sonigram/sonigram.component';

const routes: Routes = [
  { path: "", component: LoginComponent, canActivate: [LoggedGuard] },
  { path: "actividades/asistente", component: AsistenteLearnComponent },
  { path: "actividades/clasificalo", component: ClasificaloComponent },
  { path: "actividades/pictogram", component: PictoComponent },
  { path: "actividades/ar-box", component: ArBoxComponent},
  { path: "actividades/encuentralo", component: EncuentraloComponent},
  { path: "actividades/recover/:token", component: RecoverPassComponent},
  { path: "actividades/sonigram", component: SonigramComponent},



  {
    path: "",
    canActivate: [AuthGuard],
    component: MenuComponent,
    children: [
      { path: "actividades/listar", component: CardResponsiveComponent },
      { path: "actividades/principal", component: CarouselComponent },
      { path: "actividades/vestir-f", component: JuegoComponent },
      {path:'actividades/vestir-m', component:VestirHombreComponent},

      {
        path: "actividades/dientes",
        component: HygieneAntistressSkillComponent,
      },
      { path: "actividades/sandwich", component: SandwichMotorSkillsComponent },
      { path: "actividades/mesa", component: CleannessFineMotorComponent },
      { path: "actividades/instrucciones", component: InstruccionesComponent },
      { path: "actividades/premios", component: PremiosComponent },

  { path: "actividades/admin-users", component: UsersListComponent },
  { path: "actividades/edit-users", component: EditUserComponent },
  { path: "actividades/historial", component: HistorialComponent },
  { path: "actividades/perfil", component: PerfilComponent},


    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
