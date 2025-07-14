import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RandomUserResponse {
    results: RandomUser[];
    info: {
      seed: string;
      results: number;
      page: number;
      version: string;
    };
  }
  
  export interface RandomUser {
    gender: string;
    name: {
      title: string;
      first: string;
      last: string;
    };
    location: {
      street: {
        number: number;
        name: string;
      };
      city: string;
      country: string;
    };
    email: string;
    login: {
      uuid: string;
    };
    dob: {
      date: string;
      age: number;
    };
    picture: {
      large: string;
      thumbnail: string;
    };
  }
  
@Injectable({
    providedIn: 'root',
})
export class DashboardService {
private apiUrl = 'https://randomuser.me/api/?results=10';

constructor(private http: HttpClient) {}

getRandomUsers(): Observable<RandomUserResponse> {
    return this.http.get<RandomUserResponse>(this.apiUrl);
}
}