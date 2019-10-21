import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { HeaderComponent } from './components/header/header.component';
import { MessagePanelComponent } from "./components/message-panel/message-panel.component";
import { GridInputGreyComponent } from "./components/grid-input-grey/grid-input-grey.component";
import { ButtonRoundedComponent } from "./components/button-rounded/button-rounded.component";
import { WarningMessagesComponent } from "./components/warning-messages/warning-messages.component";

import { ShoppingCartService } from "../category-detail/shopping-cart/shopping-cart.service";
import { CategoriesService } from "../ categories/category/categories.service";
import { OrderService } from "../order/order.service";
import { NotificationService } from "./messages/notification.service";
import { AuthService } from './services/auth/auth.service';

const DECLARATIONS = [
    RadioComponent,
    RatingComponent,
    SnackbarComponent,
    HeaderComponent,
    MessagePanelComponent,
    GridInputGreyComponent,
    ButtonRoundedComponent,
    WarningMessagesComponent
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
                NotificationService,
                AuthService
            ]
        }
    }
}
