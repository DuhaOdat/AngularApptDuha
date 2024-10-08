import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DuhaUrlService {

  constructor(private http: HttpClient) { }

  staticData ="https://localhost:7237/api"
  getServives(): Observable<any> {



    return this.http.get<any>(`${this.staticData}/Services/getAllServices`)
  }



}
