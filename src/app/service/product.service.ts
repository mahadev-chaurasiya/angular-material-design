import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../entity/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  GetProductDetail(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:9191/v1/ecommerce/getAllProduct");
  }
}
