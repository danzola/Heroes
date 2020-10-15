import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { Dependency } from './models/Dependency';

@Injectable({
  providedIn: 'root'
})
export class DependencyService {

  URL = 'https://autenticacion.portaloas.udistrital.edu.co/apioas/oikos_crud_api/v1/dependencia';

  httpOptions = { headers: new HttpHeaders({
    'Accept': 'application/json',
    'authorization': 'Bearer ' + window.localStorage.getItem('access_token'),
  })};
  

  constructor(private http: HttpClient) {}

  getAllDependencies() {
    return this.http.get<Dependency[]>(`${this.URL}?limit=0`, this.httpOptions);
  }

}
