import { Component, OnInit } from '@angular/core';
import { category } from './category/category.model';
import { categoriesService } from './category/categories.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';

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

  constructor(private categoriesService: categoriesService, private fb: FormBuilder) {}

  ngOnInit() {
    this.searchControl = this.fb.control('');
    
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    });

    this.searchControl.valueChanges.debounceTime(500).distinctUntilChanged()
      .switchMap( (searchTerm) => this.categoriesService.categories(searchTerm)
      .catch(error => Observable.from([]))).subscribe(categories => this.categories = categories);

    this.categoriesService.categories().
      subscribe(categories => this.categories = categories);
  }

  toggleSearch(){
    (this.searchBarState === 'hidden') ? this.searchBarState = 'visible' : this.searchBarState = 'hidden';
  }
  
}
