import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  search(search: string): Observable<any> {
    const url = 'http://localhost:8000/api/' + search;
    return this.http.get(url);
  }
}