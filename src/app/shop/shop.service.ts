import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/Models/Pagination';
import { ICategory } from '../shared/Models/Category';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseURL='https://localhost:44347/api/';

  constructor(private httpClient:HttpClient) { }
   getProducts(CategoryId?:number,SortSelected?:string){
    let param=new HttpParams();
    if(CategoryId){
      param=param.append("categoryId",CategoryId);
    }
    if(SortSelected){
      param=param.append("sort",SortSelected);
    }
    return this.httpClient.get<IPagination>(this.baseURL+"Products/getAll",{params:param});
   }
   getCategories(){
    return this.httpClient.get<ICategory[]>(this.baseURL+"Categories/getAll");
   }
  }
