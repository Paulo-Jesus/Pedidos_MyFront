import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from 'src/enviroments/enviroment';
import { UsuarioDTO } from '../interfaces/UsuarioDTO';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  ApiUrl = Enviroment.endpoint;

  ObtenerTodos = "/api/Usuarios/ObtenerTodos";

  constructor(private http:HttpClient) { }

  obtenerTodos():Observable<UsuarioDTO>{
    return this.http.get<UsuarioDTO>(`${this.ApiUrl}${this.ObtenerTodos}`);
  }

  // public obtenerTodos():Observable<any[]>{
  //   const urlApi = `${this.ApiUrl}${Enviroment.endpointAPIObtenerTodos}`
  //   return this.http.get<any[]>(urlApi);
  // }

  public obtenerPorNombreUsuario(correo:string):Observable<any>{
    const urlApi = `${this.ApiUrl}${Enviroment.endpointAPIBuscarUsuarioBloqueado}${correo}`;
    const body = correo;
    return this.http.post(urlApi,body);
  }

  public desbloquearCuenta(correo:string):Observable<any>{
    const urlApi = `${this.ApiUrl}${Enviroment.endpointAPIDesbloquearCuenta}${correo}`;
    const body = correo;
    return this.http.put(urlApi,body);
  }

}
