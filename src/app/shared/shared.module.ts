import { NgModule, ModuleWithProviders } from "@angular/core";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ShoppingCartService } from "../category-detail/shopping-cart/shopping-cart.service";
import { CategoriesService } from "../ categories/category/categories.service";
import { OrderService } from "../order/order.service";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from "./messages/notification.service";

const DECLARATIONS = [
    RadioComponent,
    RatingComponent,
    SnackbarComponent
]

@NgModule({
    declarations: [
        ...DECLARATIONS
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ...DECLARATIONS
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                ShoppingCartService,
                CategoriesService,
                OrderService,
                NotificationService
            ]
        }
    }
}