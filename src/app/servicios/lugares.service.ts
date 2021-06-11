import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Regiones } from '../interfaces/regiones';


@Injectable({
  providedIn: 'root'
})
export class LugaresService {
  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getRegion(): Observable<Regiones[]>  {
    const url = this.baseURL + 'regiones/';
    return this.http.get<Regiones[]>(url);
  }

  getComuna(codigo: string): Observable<Regiones[]>  {
    const url = this.baseURL + `regiones/${codigo}/comunas`;
    return this.http.get<Regiones[]>(url);
  }
}
