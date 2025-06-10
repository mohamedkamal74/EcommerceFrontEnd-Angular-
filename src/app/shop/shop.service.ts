import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/Models/Pagination';
import { ICategory } from '../shared/Models/Category';
import { ProductParam } from '../shared/Models/ProductParam';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseURL='https://localhost:44347/api/';

  constructor(private httpClient:HttpClient) { }
   getProducts(ProductParam:ProductParam){
    let param=new HttpParams();
    if(ProductParam.CategoryId){
      param=param.append("categoryId",ProductParam.CategoryId);
    }
    if(ProductParam.SortSelected){
      param=param.append("sort",ProductParam.SortSelected);
    }
    if(ProductParam.Search){
    param=param.append("search",ProductParam.Search);
   }
    param=param.append("PageNumber",ProductParam.PageNumber);
    param=param.append("PageSize",ProductParam.PageSize);

    return this.httpClient.get<IPagination>(this.baseURL+"Products/getAll",{params:param});
   }
   
   getCategories(){
    return this.httpClient.get<ICategory[]>(this.baseURL+"Categories/getAll");
   }
  }
