import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'http://localhost:5000';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http:HttpClient) {
   }
  
   get(url:string):Observable<any> {
    return this.http.get<any>(`${API}${url}`,httpOptions)
   }

   post(url:string,payload:any):Observable<any>{
     return this.http.post<any>(`${API}${url}`,payload,httpOptions)
   }

}
