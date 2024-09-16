
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Dummy API URL

  constructor(private http: HttpClient) { }

  search(query: string): Observable<any> {
    // Corrected the template literal usage
    return this.http.get<any>(`${this.apiUrl}?q=${encodeURIComponent(query)}`);
  }
}
