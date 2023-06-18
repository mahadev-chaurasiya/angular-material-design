import { Component, ViewChild } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../entity/product';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  productList!: Product[];
  productDataSource: any;
  productDisplayColumnName: string[] = ["Action","Id", "Name", "Qty",
    "Description", "Price", "Size", "Discount Code",
    "Rating", "Type", "Discount"];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;


  constructor(private service: ProductService) {
    this.service.GetProductDetail().subscribe(res => {
      this.productList = res;
      console.log("Product service : ", this.productList);
      this.productDataSource = new MatTableDataSource<Product>(this.productList);
      this.productDataSource.paginator = this.paginator;
      this.productDataSource.sort = this.sort;
    });
  }

  filterItem(e: Event){
    const txt = (e.target as HTMLInputElement).value;
    console.log(txt);
    this.productDataSource = txt;
    console.log(this.productDataSource);
  }
}
