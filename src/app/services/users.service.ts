import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userApiBaseUrl = `${environment.baseUrl}user/`;
  headers: HttpHeaders;
  constructor(private http: HttpClient) { }

  registerUser(payload): Observable<any> {
    return this.http.post(`${this.userApiBaseUrl}add`, payload);
  }

  getUsers(token): Observable<any> {
    this.headers = new HttpHeaders({ 'x-access-token': token });
    return this.http.get(`${this.userApiBaseUrl}get`, { headers: this.headers });
  }

  login(payload): Observable<any> {
    return this.http.post(`${this.userApiBaseUrl}login`, payload);
  }

  sendAccessCode(payload): Observable<any> {
    return this.http.post(`${this.userApiBaseUrl}sendcode`, payload);
  }

  updatePassword(payload): Observable<any> {
    return this.http.put(`${this.userApiBaseUrl}update`, payload);
  }
}
