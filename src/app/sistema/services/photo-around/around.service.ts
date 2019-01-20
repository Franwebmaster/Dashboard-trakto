import { Photo } from './../../photos/photo/photo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AroundService {

  constructor(private http: HttpClient) { }

  getAroundPhotos() {
    return this.http.get<Photo[]>(environment.apiBase + 'random?count=12&orientation=portrait');
  }
}
