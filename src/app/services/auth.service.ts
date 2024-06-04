import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginWithNameAndPassword(username: string, password: string) {
    const body = {
      "username": username,
      "password": password,
    }
    const url = environment.baseURL + '/login/'
    return lastValueFrom(this.http.post(url, body))
  }
}
