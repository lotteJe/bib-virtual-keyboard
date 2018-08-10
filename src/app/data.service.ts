import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BACKEND_URL } from '../environments/environment';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  search(search: string): Observable<any> {
    // const url = 'http://localhost:8080' + "/api/" + search;
    const url = BACKEND_URL + "/api/" + search;
    return this.http.get(url);
  }

  getAvailability(frabl: string): Observable<any> {
    // const url = 'http://localhost:8080' + "/api/availability/" + frabl;
    const url = BACKEND_URL + "/api/availability/" + frabl;
    return this.http.get(url);
  }
}