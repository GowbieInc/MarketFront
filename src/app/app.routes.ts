import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { categoriesComponent } from "./ categories/categories.component";
import { categoryDetailComponent } from "./category-detail/category-detail.component";
import { MenuComponent } from "./category-detail/menu/menu.component";
import { ReviewsComponent } from "./category-detail/reviews/reviews.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'categories', component: categoriesComponent },
    { path: 'categories/:id', component: categoryDetailComponent, 
        children: 
        [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]
    },
    { path: 'order', loadChildren: './order/order.module#OrderModule' },
    { path: 'order-summary', component: OrderSummaryComponent },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: '**', component: NotFoundComponent }
]