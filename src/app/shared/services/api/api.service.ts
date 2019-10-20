import { MARKET_API } from './../../../app.api';
import { HttpService } from './../http/http.service';
import { Injectable } from "@angular/core";
import { Order } from 'app/order/order.model';

const productCategoryApi = MARKET_API + '/product/category/';
const orderApi = MARKET_API + '/orders/';

@Injectable()
export class ApiService {
    constructor(
        private httpService: HttpService
    ) { }

    // CATEGORIES

    getProductCategories() {
        return this.httpService.getJson(productCategoryApi);
    }

    getCategoryById(id: string) {
        return this.httpService.getJson(productCategoryApi + id);
    }

    getReviewsOfCategory(id: string) {
        return this.httpService.getJson(productCategoryApi + `${id}/reviews`);
    }

    getMenuOfCategory(id: string) {
        return this.httpService.getJson(productCategoryApi + `${id}/menu`);
    }

    // END CATEGORIES

    // ORDER
    checkOrder(order: Order) {
        return this.httpService.postJson(orderApi, order);
    } 
    // END ORDER

    private windowOpen(url: string) {
        return window.open(url, '_self');
    }
}