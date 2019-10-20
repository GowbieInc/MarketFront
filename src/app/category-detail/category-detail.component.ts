import { Component, OnInit } from '@angular/core';
import { categoriesService } from '../ categories/category/categories.service';
import { category } from '../ categories/category/category.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class categoryDetailComponent implements OnInit {

  category: category;

  constructor(private categoriesService: categoriesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.categoriesService.
      categoryById(this.route.snapshot.params['id']).
      subscribe(category => this.category = category);
  }

}
