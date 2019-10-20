
import {from as observableFrom,  Observable } from 'rxjs';
import {catchError, switchMap, distinctUntilChanged, debounceTime} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Category } from '../shared/models/category.model';
import { CategoriesService } from './category/categories.service';

@Component({
  selector: 'mt-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class CategoriesComponent implements OnInit {

  searchBarState = 'hidden';
  categories: Category[];

  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder) {

    this.searchForm = this.formBuilder.group({
      searchControl: ['', Validators.required]
    });

    this.searchControl = this.formBuilder.control('');
  }

  ngOnInit() {
    this.searchControl.valueChanges.pipe(debounceTime(500),distinctUntilChanged(),
      switchMap((searchTerm:string) => this.categoriesService.categories(searchTerm).pipe(
        catchError(error => observableFrom([])))),).subscribe(categories => this.categories = categories);

    this.categoriesService.categories().
      subscribe(categories => this.categories = categories);
  }

  toggleSearch() {
    (this.searchBarState === 'hidden') ? this.searchBarState = 'visible' : this.searchBarState = 'hidden';
  }
}
