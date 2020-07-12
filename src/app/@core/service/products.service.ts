import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/products.model';
import { map } from 'rxjs/operators';
import { Category } from '../models/category.models';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private urlEndPoint:string = 'http://demo4271900.mockable.io/products';
  private urlEnpointCategory: string = 'https://demo4271900.mockable.io/category';
  
  constructor(private http: HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get(this.urlEndPoint).pipe(map((response) => response as Product[]));
  }


  getCategory(): Observable<any> {
    return this.http.get(this.urlEnpointCategory).pipe(map((response) => response as Category[]));
  }
}
