import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../services/login.service";
import { DataService } from '../services/data.service';
import { PartidaService } from '../services/partida.service';
import { Partida } from '../models/Partida';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  credenciales = {
    cedula: "",
    contrasena: "",
  };

  partida : Partida;

  constructor(private router: Router, private service: LoginService, private service2: DataService, private service3: PartidaService ) {

  }

  ngOnInit() {
    this.service2.currentMessage.subscribe(message => this.credenciales = message) 
  }

  login(){
    
      this.service.login(this.credenciales)
        .subscribe(res=>{
          //console.log(res);
          //alert(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('_id', res._id);
          
          //this.service2.changeMessage({"_id": localStorage.getItem('_id') })
          
          this.partida = {
              usuario : localStorage.getItem('_id')    
          };

          this.service3.insertPartida(this.partida).subscribe(res => {
            console.log(res);
          });

          this.router.navigate(['actividades/vestir']);
        },
          err => alert(err.error.sms)
        )
    
    
  }
}
