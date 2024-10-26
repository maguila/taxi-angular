import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Precio } from '../model/precios';

@Injectable({
  providedIn: 'root'
})
export class PreciosService {

  constructor(private http:HttpClient) { }

  getPrecios() : Observable<Precio[]>{    
    let url = environment.API_URL + '/precios'
    return this.http.get<Precio[]>(url)
  }


}
