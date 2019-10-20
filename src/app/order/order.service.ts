import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './../shared/services/api/api.service';
import { Order, OrderItem } from './order.model';
import { ShoppingCartService } from '../category-detail/shopping-cart/shopping-cart.service';
import { CartItem } from '../category-detail/shopping-cart/cart-item.model';

@Injectable()
export class OrderService {

  constructor(
    private cartService: ShoppingCartService,
    private apiService: ApiService
  ) { }

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
    if (item.quantity === 0) {
      this.removeItem(item);
    }
  }

  removeItem(item: CartItem) {
    this.cartService.removeItem(item);
  }

  itemsValue(): number {
    return this.cartService.total();
  }

  checkOrder(order: Order): Observable<Order> {
    return this.apiService.checkOrder(order);
  }

  clear() {
    this.cartService.clear();
  }
}
