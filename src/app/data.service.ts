import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BACKEND_URL } from '../environments/environment';
@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  search(search: string): Observable<any> {
    const url = BACKEND_URL + "/api/" + search;
    return this.http.get(url);
  }
}