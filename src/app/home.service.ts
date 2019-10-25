import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
	uri = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  getusers(){
    return this
           .http
           .get(`${this.uri}/table/users`);
  }
}
