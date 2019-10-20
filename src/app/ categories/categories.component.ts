
import {from as observableFrom,  Observable } from 'rxjs';

import {catchError, switchMap, distinctUntilChanged, debounceTime} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { category } from './category/category.model';
import { categoriesService } from './category/categories.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
export class categoriesComponent implements OnInit {

  searchBarState = 'hidden';
  categories: category[];

  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(
    private categoriesService: categoriesService,
    private formBuilder: FormBuilder) {

    this.searchForm = this.formBuilder.group({
      searchControl: ['', Validators.required]
    });

    this.searchControl = this.formBuilder.control('');
  }

  ngOnInit() {
    this.searchControl.valueChanges.pipe(debounceTime(500),distinctUntilChanged(),
      switchMap((searchTerm) => this.categoriesService.categories(searchTerm).pipe(
        catchError(error => observableFrom([])))),).subscribe(categories => this.categories = categories);

    this.categoriesService.categories().
      subscribe(categories => this.categories = categories);
  }

  toggleSearch() {
    (this.searchBarState === 'hidden') ? this.searchBarState = 'visible' : this.searchBarState = 'hidden';
  }

}
