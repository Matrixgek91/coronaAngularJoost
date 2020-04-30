import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Login } from './login';
import { Registration } from './registration';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  verify(login: Login){
    return this.http.post<Registration[]>('http://localhost:8080/login', login)

  }
}
