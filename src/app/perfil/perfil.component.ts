import { Component, OnInit, ViewChild, AfterViewChecked } from "@angular/core";
// import Speech from 'speak-tts'
import {
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { Persona } from "../models/Persona";
import { UsersService } from "../services/usuarios/users.service";
import { RegisterService } from "../services/register.service";
import { MatSnackBar } from "@angular/material/snack-bar";
declare var webNotification: any;
declare function push(): any;
@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.component.html",
  styleUrls: ["./perfil.component.css"],
})
export class PerfilComponent implements OnInit, AfterViewChecked {
  @ViewChild("formDirective", null) private formDirective: NgForm;

  avatar: string;
  showEmail: boolean;
  showContra: boolean;
  emailBlock: boolean;
  contraBlock: boolean;

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  usuario: Persona = {
    cedula: "",

    nombre: "",

    apellido: "",

    fecha_nacimiento: null,

    sexo: "M",

    usuario: null,

    email: "",
  };

  credenciales2 = {
    cedula: "",
    contrasena: "",
    contrasena2: "",
  };

  profileForm: FormGroup;

  constructor(
    private userService: UsersService,
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private _snackBar: MatSnackBar
  ) {
    this.showEmail = false;
    this.showContra = false;
    this.emailBlock = false;
    this.contraBlock = false;
  }

  get f() {
    return this.profileForm.controls;
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    if (!this.emailFormControl.hasError("email") && this.usuario.email !== "") {
      this.emailBlock = false;
    } else {
      this.emailBlock = true;
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: "top",
    });
  }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      contrasena: ["", Validators.required],
      contrasena2: ["", Validators.required],
    });

    this.userService
      .selectPersona(localStorage.getItem("_id"))
      .subscribe((res) => {
        console.log(res);
        this.usuario = res;
        this.avatar = "https://icotar.com/initials/" + this.usuario.nombre[0];
        console.log(this.avatar);
      });

    // push();

    // const speech = new Speech()

    //   speech.init().then((data) => {
    //     // The "data" object contains the list of available voices and the voice synthesis params
    //     console.log("Speech is ready, voices are available", data)
    // }).catch(e => {
    //     console.error("An error occured while initializing : ", e)
    // })

    //   speech.init({
    //     'volume': 1,
    //        'lang': 'es_ES',
    //        'rate': 1,
    //        'pitch': 1,
    //        'voice':'español España',
    //        'splitSentences': true,
    //        'listeners': {
    //            'onvoiceschanged': (voices) => {
    //                console.log("Event voiceschanged", voices)
    //            }
    //        }
    // }).then(data =>{

    // })

    //   speech.speak({
    //     text: 'Mi nombre es Pablo, tengo 20 años',
    // }).then(() => {
    //     console.log("Success !")
    // }).catch(e => {
    //     console.error("An error occurred :", e)
    // })

    // speech.speak({
    //       text: 'Mi nombre es Pablo, tengo 20 años',
    //   }).then(() => {
    //       console.log("Success !")
    //   }).catch(e => {
    //       console.error("An error occurred :", e)
    //   })
  }

  toggle(e) {
    if (this.showEmail) {
      this.userService.updatePersona(this.usuario).subscribe((res) => {
        console.log(res);
        this.openSnackBar("Email actualizado correctamente", "X");
      });
    }

    if (this.usuario.email !== "") {
      this.showEmail = !this.showEmail;
    }
  }

  toggle2(e) {
    if (this.usuario.usuario.contrasena !== "") {
      this.showContra = !this.showContra;
    }

    if (this.credenciales2.contrasena.length  >5 && this.credenciales2.contrasena2.length >5) {
      if (this.credenciales2.contrasena === this.credenciales2.contrasena2 ) {
        this.credenciales2.cedula = this.usuario.cedula;

        this.registerService
          .registerUser2(this.credenciales2)
          .subscribe((res) => {
            console.log(res);

            navigator.serviceWorker
              .register("ngsw-worker.js")
              .then(function (registration) {
                webNotification.showNotification(
                  "Cambio de Contraseña Exitoso",
                  {
                    serviceWorkerRegistration: registration,
                    body: "Has cambiado la contraseña de tu cuenta",
                    icon: "my-icon.ico",
                    actions: [
                      {
                        action: "OK",
                        title: "OK",
                      },
                    ],
                    autoClose: 5000, //auto close the notification after 4 seconds (you can manually close it via hide function)
                  },
                  function onShow(error, hide) {
                    if (error) {
                      window.alert(
                        "Unable to show notification: " + error.message
                      );
                    } else {
                      console.log("Notification Shown.");

                      setTimeout(function hideNotification() {
                        console.log("Hiding notification....");
                        hide(); //manually close the notification (you can skip this if you use the autoClose option)
                      }, 5000);
                    }
                  }
                );
              });
          });
      }
    }else{
      this.openSnackBar("La contraseña debe tener al menos 6 caractéres", "X");
    }

    this.formDirective.resetForm();
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
