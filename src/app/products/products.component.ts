import { Component, OnInit } from '@angular/core';

import { products } from '../mock-data/products'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any;

  ngOnInit(): void {
    this.products = products;
  }

  share() {
    window.alert('The product has been shared!');
  }

}
