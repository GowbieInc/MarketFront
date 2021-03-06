import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { Category } from '../../shared/models/category.model';

@Component({
  selector: 'mt-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  animations: [
    trigger('categoryAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class CategoryComponent implements OnInit {

  categoriestate = 'ready'

  @Input() category: Category;

  constructor() { }

  ngOnInit() { }
}
