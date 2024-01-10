import { Component, OnInit } from '@angular/core';
import { product_detail } from '../product_detail';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MOCK_PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) {}
  product: product_detail = {
    id: Number(this.route.snapshot.paramMap.get('id')),
    name: MOCK_PRODUCTS[Number(this.route.snapshot.paramMap.get('id'))-1].name,
    price: MOCK_PRODUCTS[Number(this.route.snapshot.paramMap.get('id'))-1].price
  }

  ngOnInit(): void {
  }

}
