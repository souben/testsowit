import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plot } from './plot';


// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
   
//   API_URL = 'http://localhost';

//   constructor(private http: HttpClient) { }

//   public getPlots(): Observable<Task[]> {
//     return this.http.get<Plot[]>(`${this.API_URL}/plots/`)
//   }
// }
