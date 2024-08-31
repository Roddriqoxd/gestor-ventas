import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://fakestoreapi.com';

  constructor(private _httpClient: HttpClient) {

   }

   getData(): Observable<any> {
    return this._httpClient.get<any>(`${this.apiUrl}/users`);
  }


}
