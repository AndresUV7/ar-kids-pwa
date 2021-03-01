import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Persona } from '../models/Persona';
import { ErrorStateMatcher } from '@angular/material/core';
import { UsersService } from '../services/usuarios/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  del: boolean;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  usuario: Persona = {
    
    cedula : '',

    nombre : '',

    apellido : '',

    fecha_nacimiento : null,
    
    sexo : 'M',

    usuario: null,

    email: ''
  };
  submitted = false;
  registerForm: FormGroup;
  myControl = new FormControl();
  titulo = 'Nuevo Usuario';
  // options: string[] = ['One', 'Two', 'Three'];
  // filteredOptions: Observable<string[]>;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<EditUserComponent>, private formBuilder: FormBuilder,  private _snackBar: MatSnackBar,private userService: UsersService) { 
    this.del = false;

  }

  ngOnInit() {
    
    console.log(this.usuario);
    
     if (this.data){
      this.titulo = this.data.title;
      this.usuario = this.data.data;
      this.del = this.data.del
     }

   console.log(this.usuario)
    this.registerForm = this.formBuilder.group({
      cedula: ["", Validators.required],
      nombre: ["", Validators.required,],
      apellido: ["", Validators.required,],
      fecha_nacimiento: ["", Validators.required,],
      sexo: ["", Validators.required,],
    });

    // this.filteredOptions = this.myControl.valueChanges
    // .pipe(
    //   startWith(''),
    //   map(value => this._filter(value))
    // );
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: "top",
    });
  }

  onSubmit(){
    this.submitted = true;
    console.log("guardar")
    if (!this.registerForm.invalid && this.usuario.cedula.length > 5) {
      
      this.dialogRef.close(this.usuario);
    }else if (this.usuario.cedula.length < 6){
      this.openSnackBar("El usuario debe tener mínimo 6 caractéres","X")
    }
  

  }

  radioChange(e){
    console.log(this.usuario.sexo)
  }

  get f() {
    return this.registerForm.controls;
  }

  close(){
    
    this.dialogRef.close();

  }

  elimina(){
    this.dialogRef.close("elimina");

  }

}
