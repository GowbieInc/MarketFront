import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import { MEAT_API } from '../../app.api';

import { category } from './category.model';
import { ErrorHandler } from '../../app.error-handler';
import { MenuItem } from '../../category-detail/menu-item/menu-item.model';


@Injectable()
export class categoriesService {

  constructor(private http: Http) { }



  categories(search?: string): Observable<category[]> {
    return this.http.
      get(`${MEAT_API}/categories`, {params: {q: search}}).
      map(response => response.json()).catch(ErrorHandler.handleError);
  }

  categoryById(id: string): Observable<category> {
    return this.http.get(`${MEAT_API}/categories/${id}`).
      map(response => response.json()).catch(ErrorHandler.handleError);
  }

  reviewsOfcategory(id: string): Observable<any> {
    return this.http.
      get(`${MEAT_API}/categories/${id}/reviews`).
      map(response => response.json()).catch(ErrorHandler.handleError);
  }

  menuOfcategory(id: string): Observable<MenuItem[]> {
    return this.http.
      get(`${MEAT_API}/categories/${id}/menu`).
      map(response => response.json()).catch(ErrorHandler.handleError);
  }
  
}
