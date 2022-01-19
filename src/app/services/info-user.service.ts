import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InfoUserService {

  constructor(private http: HttpClient) { }

   getResponseUser() {
      return this.http.get('http://ip-api.com/json/');
  }
}
