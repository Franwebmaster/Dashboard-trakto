import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Photo } from './../../photos/photo/photo';

@Injectable({
  providedIn: 'root'
})
export class AllCuratedService {

  constructor(private http: HttpClient) { }

  getAllCurated() {
    return this.http.get<Photo[]>(environment.apiBase + 'curated?per_page=10&page=4&order_by=popular');
  }

  getPhotoPaginated(page:number) {
    const params = new HttpParams().append('page', page.toString());
    return this.http.get<Photo[]>(environment.apiBase +'curated?per_page=10&', { params } )
  }
}
