import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url ="http://localhost:3000";
  getUser():Observable<any>{
    return this
              .http
              .get(`${this.url}/results`)
              .pipe(map(res => res))
  }
}
