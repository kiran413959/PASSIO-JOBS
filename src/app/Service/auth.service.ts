import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(
    private http:HttpClient
  ) {}

  baseUrl = 'http://localhost:4201'

  signup(data:any){
    return this.http.post(`${this.baseUrl}/signup`, data)
  }
  login (data: any) {
    return this.http.post(`${this.baseUrl}/login`, data)
}
}

