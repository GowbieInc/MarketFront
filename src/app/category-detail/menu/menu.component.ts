import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../ categories/category/categories.service';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  constructor(private categoriesService: CategoriesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.categoriesService.menuOfcategory(this.route.parent.snapshot.params['id']);
  }

  addMenuItem(item: MenuItem){
    console.log(item);
  }

}
