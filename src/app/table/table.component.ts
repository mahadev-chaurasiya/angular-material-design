import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../entity/product';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  productList!: Product[];
  productDataSource: any;
  productDisplayColumnName: string[] = ["Action", "Product Id", "Product Name", "Product Qty.",
    "Product Description", "Product Price", "Product Size", "Product Coupon Code",
    "Product Rating", "Product Type", "Product Dsicount"];

  constructor(private service: ProductService) {
    this.service.GetProductDetail().subscribe(res => {
      this.productList = res;
      console.log("Product service : ", this.productList);
      this.productDataSource = new MatTableDataSource<Product>(this.productList);
    });
  }
}