import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../ categories/category/categories.service';

import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(private categoriesService: CategoriesService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.categoriesService.
    reviewsOfcategory(this.route.parent.snapshot.params['id']);
  }

}
