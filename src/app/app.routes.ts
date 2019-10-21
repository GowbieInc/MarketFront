import { Routes } from "@angular/router";

import { HomeFrameComponent } from './home/home-frame/home-frame.component';
import { HomeComponent } from "./home/home.component";
import { CategoriesComponent } from "./ categories/categories.component";
import { CategoryDetailComponent } from "./category-detail/category-detail.component";
import { MenuComponent } from "./category-detail/menu/menu.component";
import { ReviewsComponent } from "./category-detail/reviews/reviews.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeFrameComponent,
        children:[
            {
                path:'',
                component: HomeComponent
            },
            {
                path: 'categories',
                component: CategoriesComponent
            },
            {
                path: 'categories/:id', component: CategoryDetailComponent,
                children:
                    [
                        { path: '', redirectTo: 'menu', pathMatch: 'full' },
                        { path: 'menu', component: MenuComponent },
                        { path: 'reviews', component: ReviewsComponent }
                    ]
            },
            {
                path: 'order',
                loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
            },
            {
                path: 'order-summary', component: OrderSummaryComponent
            },
            {
                path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
            }
        ]
    },
    {
        path: 'login',
        loadChildren: 'app/login/login.module#LoginModule'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]