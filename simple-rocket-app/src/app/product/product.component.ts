import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product:Product;
  selectedProduct : Product;
  constructor() { }

  ngOnInit() {
  }

  selectProduct(product:Product) : void{
    this.selectedProduct = product;
    console.log(`you selected product with id ${product.id}`)
  }

}
