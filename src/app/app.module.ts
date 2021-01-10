import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PruebaComponent } from './prueba/prueba.component';
import { JuegoComponent } from './juego/juego.component';
import { Juego2Component } from './juego2/juego2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MenuComponent } from './menu/menu.component';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { CardComponent } from './card/card.component';
import { PictoComponent } from './picto/picto.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NguCarouselModule } from '@ngu/carousel';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CleannessFineMotorComponent } from './cleanness-fine-motor/cleanness-fine-motor.component';
import { TestPcComponent } from './test-pc/test-pc.component';
import { JuegoService } from './services/juegos/juego.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ArSpeechComponent } from './ar-speech/ar-speech.component';
import { HygieneAntistressSkillComponent } from './hygiene-antistress-skill/hygiene-antistress-skill.component';
import { VestirHombreComponent } from './vestir-hombre/vestir-hombre.component';
import { CardResponsiveComponent } from './card-responsive/card-responsive.component';
import { LoginComponent, DialogContentExampleDialog, PizzaPartyComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { AuthGuard } from './services/auth.guard';
import { LoggedGuard } from './services/logged.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { DataService } from './services/data.service';
import { PartidaService } from './services/partida.service';
import { RegisterService } from './services/register.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AsistenteLearnComponent } from './asistente-learn/asistente-learn.component';
import { SandwichMotorSkillsComponent } from './sandwich-motor-skills/sandwich-motor-skills.component';
import {
  RxSpeechRecognitionService,
  SpeechRecognitionModule,
  SpeechRecognitionService,
} from '@kamiazya/ngx-speech-recognition';
import { InstruccionesComponent } from './instrucciones/instrucciones.component';
import { UsersListComponent } from './users-list/users-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { DePasoComponent } from './de-paso/de-paso.component';
import { ClasificaloComponent } from './clasificalo/clasificalo.component';
import { PremiosComponent } from './premios/premios.component';
import { ArBoxComponent } from './ar-box/ar-box.component';
import { EncuentraloComponent } from './encuentralo/encuentralo.component';
import { SonigramComponent } from './sonigram/sonigram.component';
import { HistorialComponent } from './historial/historial.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RecursosComponent } from './recursos/recursos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AyudaComponent } from './ayuda/ayuda.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    JuegoComponent,
    Juego2Component,
    MenuComponent,
    CardComponent,
    PictoComponent,
    CarouselComponent,
    CleannessFineMotorComponent,
    TestPcComponent,
    ArSpeechComponent,
    HygieneAntistressSkillComponent,
    VestirHombreComponent,
    CardResponsiveComponent,
    LoginComponent,
    DialogContentExampleDialog,
    PizzaPartyComponent,
    AsistenteLearnComponent,
    SandwichMotorSkillsComponent,
    InstruccionesComponent,
    UsersListComponent,
    EditUserComponent,
    DePasoComponent,
    ClasificaloComponent,
    PremiosComponent,
    ArBoxComponent,
    EncuentraloComponent,
    SonigramComponent,
    HistorialComponent,
    RecursosComponent,
    PerfilComponent,
    AyudaComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    InfiniteScrollModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' }),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    NguCarouselModule,
    FlexLayoutModule, 
    FormsModule.withConfig({ warnOnDeprecatedNgFormSelector: "never" }),
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    SpeechRecognitionModule,
    // BackButtonDisableModule.forRoot()

  ],
  entryComponents: [
    DialogContentExampleDialog,
    PizzaPartyComponent
  ],
  providers: [ 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthGuard,
    LoginService,
    DeviceDetectorService,
    DataService,
    RegisterService,
    RxSpeechRecognitionService,
    SpeechRecognitionService
    
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
