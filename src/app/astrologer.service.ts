import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Astrologer {
  id: number;
  firstName: string;
  lastName: string;
  skills: string[];
  image: string; // assuming each astrologer has an image URL
}

@Injectable({
  providedIn: 'root'
})
export class AstrologerService {
  private apiUrl = 'http://localhost:8080/api/astrologers'; 

  constructor(private http: HttpClient) { }

  getAstrologers(): Observable<Astrologer[]> {
    return this.http.get<Astrologer[]>(this.apiUrl);
  }
  updateAstrologerStatus(id: number, status: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, { status });
  }

  signupAstrologer(astrologer: any): Observable<any> {
    return this.http.post(this.apiUrl, astrologer);
  }
}
