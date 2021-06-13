import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  validarLogin(rut:string, password:string):Observable<any>{
    let headers= new HttpHeaders();
    headers.append('Content-Type','aplication/json');

    const params= new HttpParams();
    params.set("rut",rut);
    params.set("password",password);

    let login={
      rut,password
    }

    login.rut=rut;
    login.password=password;
    //return this.http.get(`http://localhost:3500/api/paciente/login?rut=${JSON.stringify(rut)}&password=${JSON.stringify(password)}`);
    return this.http.post('http://localhost:3500/api/paciente/login', login);
  }
}
