import {
  Component,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../services/login.service";
import { DataService } from "../services/data.service";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { RegisterService } from "../services/register.service";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
declare var webNotification: any

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  @ViewChild("formDirective", null) private formDirective: NgForm;
  @ViewChild("formDirective2", null) private formDirective2: NgForm;
 

  showBar = {
    show: true
  };

  registerForm: FormGroup;
  registerForm2: FormGroup;
  durationInSeconds = 1;
  submitted = false;
  submitted2 = false;
  registro = true;

  credenciales = {
    cedula: "",
    contrasena: "",
  };

  credenciales2 = {
    cedula: "",
    contrasena: "",
    contrasena2: "",
  };

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router,
    private service: LoginService,
    private _communicationService: DataService,
    private service3: RegisterService
  ) {}

  ngOnInit() {
    
    
    this.registro = false;
    this.registerForm = this.formBuilder.group({
      cedula: ["", Validators.required],
      contrasena: ["", Validators.required],
    });

    this.registerForm2 = this.formBuilder.group({
      cedula: ["", Validators.required],
      contrasena: ["", Validators.required],
      contrasena2: ["", Validators.required],
    });
  }

  tabClick(tab) {
    if (tab.index == 0) {
      this.formDirective2.resetForm();
    } else {
      this.formDirective.resetForm();
    }
  }

  login() {
    this.service.login(this.credenciales).subscribe(
      (res) => {
        //console.log(res);
        localStorage.setItem("token", res.token);
        localStorage.setItem("_id", res._id);
        localStorage.setItem("gender", res.gender);
        

        // this.partida = {
        //     usuario : localStorage.getItem('_id')
        // };

        // this.service3.insertPartida(this.partida).subscribe(res => {
        //   console.log(res);
        // });
        navigator.serviceWorker.register('ngsw-worker.js').then(function(registration) {
          webNotification.showNotification('Inicio de Sesión Exitoso', {
              serviceWorkerRegistration: registration,
              body: 'Bienvenid@ a otra sesión de aprendizaje...',
              icon: 'my-icon.ico',
              actions: [
                  {
                      action: 'OK',
                      title: 'OK'
                  },
              ],
              autoClose: 5000 //auto close the notification after 4 seconds (you can manually close it via hide function)
          }, function onShow(error, hide) {
              if (error) {
                  window.alert('Unable to show notification: ' + error.message);
              } else {
                  console.log('Notification Shown.');
  
                  setTimeout(function hideNotification() {
                      console.log('Hiding notification....');
                      hide(); //manually close the notification (you can skip this if you use the autoClose option)
                  }, 5000);
              }
          });
      });
        this.openSnackBar("Cargando...", "X");

        this.router.navigate(["actividades/principal"]);
      },
      (err) => {
        this.openSnackBar(err.error, "X");
      }
    );

    // console.log("AQUI" + this.credenciales.cedula)
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
      verticalPosition: "top",
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  register() {
    this.service3.registerUser(this.credenciales2).subscribe((res) => {
      console.log(res);

      if (!res.sms) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("_id", res._id);
        localStorage.setItem("gender", res.gender);
      } else {
        this.openSnackBar(res.sms, "X");
      }

      // this.partida = {
      //     usuario : localStorage.getItem('_id')
      // };

      // this.service3.insertPartida(this.partida).subscribe(res => {
      //   console.log(res);
      // });

      navigator.serviceWorker.register('ngsw-worker.js').then(function(registration) {
        webNotification.showNotification('Usuario Registrado Exitosamente', {
            serviceWorkerRegistration: registration,
            body: 'Gracias por unirte a AR-KIDS!!',
            icon: 'my-icon.ico',
            actions: [
                {
                    action: 'OK',
                    title: 'OK'
                },
            ],
            autoClose: 5000 //auto close the notification after 4 seconds (you can manually close it via hide function)
        }, function onShow(error, hide) {
            if (error) {
                window.alert('Unable to show notification: ' + error.message);
            } else {
                console.log('Notification Shown.');

                setTimeout(function hideNotification() {
                    console.log('Hiding notification....');
                    hide(); //manually close the notification (you can skip this if you use the autoClose option)
                }, 5000);
            }
        });
    });
      this.openSnackBar("Cargando...", "X");
      this.router.navigate(["actividades/principal"]);

    });

    
  }

  onSubmit() {
    this.submitted = true;
    console.log("no pasa");
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      if (this.registerForm.controls.cedula.errors) {
        if (this.registerForm.controls.contrasena.errors) {
          this.openSnackBar("Cedula y contraseña requerid@s", "X");
        } else {
          this.openSnackBar("Cedula requerida", "X");
        }
      } else {
        this.openSnackBar("Contrasena requerida", "X");
      }
      return;
    }

    this.login();
  }

  onSubmit2() {
    this.submitted2 = true;
    console.log("no pasa");
    // stop here if form is invalid
    if (this.registerForm2.invalid) {
      if (this.registerForm2.controls.cedula.errors) {
        if (this.registerForm2.controls.contrasena.errors) {
          this.openSnackBar("Cedula y contraseña requerid@s", "X");
        } else {
          this.openSnackBar("Cedula requerida", "X");
        }
      } else {
        if (this.registerForm2.controls.contrasena.errors) {
          this.openSnackBar("Contrasena requerida", "X");
        } else {
          this.openSnackBar("Repita la contraseña", "X");
        }
      }
      return;
    }

    if (this.credenciales2.contrasena.length < 6 || this.credenciales2.contrasena2.length <6){
      this.openSnackBar("La contraseña debe tener al menos 6 caractéres", "X");

    }else{
      if (this.credenciales2.contrasena == this.credenciales2.contrasena2) {
        this.register();
      } else {
        this.openSnackBar("Las contraseñas no coinciden", "X");
      }
    }
  }

  get f() {
    return this.registerForm.controls;
  }

  get f2() {
    return this.registerForm.controls;
  }
}

@Component({
  selector: "dialog-content-example-dialog",
  templateUrl: "./dialog-content-example-dialog.html",
})
export class DialogContentExampleDialog implements OnInit {
  message = {};

  constructor(private service: DataService) {}

  ngOnInit() {
   
  }
}

@Component({
  selector: "snack-bar-component-example-snack",
  templateUrl: "snack-bar-component-example-snack.html",
  styles: [
    `
      .example-pizza-party {
        color: hotpink;
      }
    `,
  ],
})
export class PizzaPartyComponent {}
