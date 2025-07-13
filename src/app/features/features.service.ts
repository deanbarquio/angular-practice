import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Feature {
  Feature_Id: string;
  Feature_Name: string;
  Feature_Desc: string;
  Feature_Status: number;
  Date_Created: string;
  is_Deleted: number;
  Feature_JiraNo: string;
  Feature_JiraAlias: string;
}

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  private apiUrl = 'http://localhost:5000/api/features';

  constructor(private http: HttpClient) {}

  getFeatures(): Observable<Feature[]> {
    return this.http.get<Feature[]>(this.apiUrl);
  }
}
