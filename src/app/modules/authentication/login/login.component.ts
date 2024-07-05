import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/interfaces/LoginDTO';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  hide = true;
  form : FormGroup;

  constructor(
    private fb:FormBuilder,
    private _loginService:LoginService,
    private router:Router
  ) {
    this.form = this.fb.group({
      Correo: ['',Validators.required],
      Contrasena: ['',Validators.required]
    })
   }

  onSubmit(){
    const loginDTO = { Correo: this.form.value.Correo, Contrasena: this.form.value.Contrasena };
    console.log(loginDTO);
    
    this._loginService.login(loginDTO).subscribe(response =>{
      console.log("Datos correctos");
      
      this.router.navigate(['/home/seguridad/usuarios']);
      
    }, error =>{
      console.log("Datos incorrectos",error);
    });
  }

  vistaRecuperarClave(){
    this.router.navigate(['/recuperar_clave']);
  }
}
