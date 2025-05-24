import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/Models/Pagination';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseURL='https://localhost:44347/api/';

  constructor(private httpClient:HttpClient) { }
   getProducts(){
    return this.httpClient.get<IPagination>(this.baseURL+"Products/getAll");
   }
  }
