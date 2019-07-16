import { Observable, of } from 'rxjs';
import { Product } from './product';
import {PRODUCTS} from './mock-products'

//const httpHeaders = new HttpHeader

export class MockProductService {
  products: Product[] = PRODUCTS;

  constructor() {


  }

  getProducts() : Observable<Product[]> { 
    return of(this.products);
  }
}
