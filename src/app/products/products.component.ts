import { Component, OnInit } from '@angular/core';
import { MOCK_PRODUCTS } from '../mock-products';
import { product_detail } from '../product_detail';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private routing: Router) { }
  mock_products = MOCK_PRODUCTS; // get data about products
  openDetails(product: product_detail)
  {
    this.routing.navigate(["/product_detail"]);
  }
  ngOnInit(): void {
  }

}
