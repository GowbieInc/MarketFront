import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../ categories/category/categories.service';
import { Category } from '../shared/models/category.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  category: Category;

  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.categoriesService.
      categoryById(this.route.snapshot.params['id']).
      subscribe(category => this.category = category);
  }

}
