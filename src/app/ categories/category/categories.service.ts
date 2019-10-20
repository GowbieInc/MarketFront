import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';




import { MEAT_API } from '../../app.api';

import { category } from './category.model';
import { MenuItem } from '../../category-detail/menu-item/menu-item.model';


@Injectable()
export class categoriesService {

  constructor(private http: Http) { }



  categories(search?: string): Observable<category[]> {
    return this.http.
      get(`${MEAT_API}/categories`, {params: {q: search}}).
      map(response => response.json());
  }

  categoryById(id: string): Observable<category> {
    return this.http.get(`${MEAT_API}/categories/${id}`).
      map(response => response.json());
  }

  reviewsOfcategory(id: string): Observable<any> {
    return this.http.
      get(`${MEAT_API}/categories/${id}/reviews`).
      map(response => response.json());
  }

  menuOfcategory(id: string): Observable<MenuItem[]> {
    return this.http.
      get(`${MEAT_API}/categories/${id}/menu`).
      map(response => response.json());
  }
  
}
