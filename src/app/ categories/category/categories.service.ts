import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './../../shared/services/api/api.service';
import { Category } from '../../shared/models/category.model';
import { MenuItem } from '../../category-detail/menu-item/menu-item.model';


@Injectable()
export class CategoriesService {

  constructor(private apiService: ApiService) { }

  categories(search?: string): Observable<Category[]> {
    return this.apiService.getProductCategories();
  }

  categoryById(id: string): Observable<Category> {
    return this.apiService.getCategoryById(id);
  }

  reviewsOfcategory(id: string): Observable<any> {
    return this.apiService.getReviewsOfCategory(id);
  }

  menuOfcategory(id: string): Observable<MenuItem[]> {
    return this.apiService.getMenuOfCategory(id);
  }
}
