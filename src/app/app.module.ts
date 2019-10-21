import { SessionHeaderInterceptor } from './shared/interceptors/session-header.interceptor';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { ROUTES } from './app.routes'

import { ApiServiceModule } from './shared/services/api/api.service.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './ categories/categories.component';
import { CategoryComponent } from './ categories/category/category.component'
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { MenuComponent } from './category-detail/menu/menu.component';
import { ShoppingCartComponent } from './category-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './category-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './category-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
// import { OffersComponent } from './home/src/app/home/offers/offers.component';
import { OffersComponent } from './home/offers/offers.component';
import { FooterComponent } from './footer/footer.component';
import { SessionStorage } from './shared/services/storage/session-storage/session-storage.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeFrameComponent } from './home/home-frame/home-frame.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CategoriesComponent,
    CategoryComponent,
    CategoryDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    NotFoundComponent,
    OffersComponent,
    FooterComponent,
    HomeFrameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ApiServiceModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [
    { 
      provide: LocationStrategy, 
      useClass: HashLocationStrategy 
    },
    { 
      provide: LOCALE_ID, 
      useValue: 'pt-BR' 
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SessionHeaderInterceptor,
      multi: true
    },
    SessionStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
