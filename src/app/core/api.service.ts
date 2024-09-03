import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../intefaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = '/api';

  constructor(private _httpClient: HttpClient) {

   }

   getData(): Observable<any> {
    return this._httpClient.get<any>(`${this.apiUrl}/user`);
  }

  setData(body: User): Observable<any> {
    return this._httpClient.post<any>(`${this.apiUrl}/user`,this._transform(body));
  }

  private _transform(data: User): FormData {

    let formData = new FormData;
    formData.append('name', data.name);
    formData.append('lastname', data.lastname);
    formData.append('ci', data.ci);
    formData.append('username', data.username);
    formData.append('password', data.password);
    formData.append('phone', data.phone);
    formData.append('role', data.role);
    formData.append('address', data.address);
    formData.append('birthdate', data.birthdate);
    formData.append('photo', data.photo);



    return formData;
  }
}
