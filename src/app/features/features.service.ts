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

export interface CatBreed {
  weight: {
    imperial: string;
    metric: string;
  };
  id: string;
  name: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
}

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  private apiUrl = 'https://api.thecatapi.com/v1/breeds';

  constructor(private http: HttpClient) {}

  getFeatures(): Observable<Feature[]> {
    return this.http.get<Feature[]>(this.apiUrl);
  }
}
