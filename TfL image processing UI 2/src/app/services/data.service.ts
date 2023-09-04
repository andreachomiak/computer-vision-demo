import { QuixService } from './quix.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string;

  constructor(private httpClient: HttpClient, private quixService: QuixService) {
    this.url = `https://data-api-${this.quixService.workspaceId}.deployments.quix.ai`
  }

  getMaxVehicles(): Observable<{ [key: string]: number }> {
    const url = `${this.url}/max_vehicles`
    return this.httpClient.get<{ [key: string]: number }>(url)
  }

  getDetectedObjects(id?: string): Observable<{ [key: string]: any }> {
    let url = `${this.url}/detected_objects`
    if (id) url += `/${id}` 
    return this.httpClient.get<{ [key: string]: number }>(url)
  }

  getVehicles(): Observable<{ [key: string]: any }> {
    const url = `${this.url}/vehicles`
    return this.httpClient.get<{ [key: string]: number }>(url)
  }
}
