import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registration } from "./registration";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  save(registration: Registration) {
    return this.http.post<any>('http://localhost:8080/registration', registration)
    
  }




}
