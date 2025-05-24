import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { IPagination } from '../shared/Models/Pagination';
import { IProduct } from '../shared/Models/Product';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.sass'
})
export class ShopComponent implements OnInit{
  constructor(private shopService:ShopService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
products:IProduct[]
  getAllProducts(){
  this.shopService.getProducts().subscribe({
    next:((value:IPagination)=>{
this.products=value.data;
    })
  });
  }
}
