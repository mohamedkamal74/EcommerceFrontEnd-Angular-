import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { IPagination } from '../shared/Models/Pagination';
import { IProduct } from '../shared/Models/Product';
import { ICategory } from '../shared/Models/Category';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit{
  constructor(private shopService:ShopService){}
  ngOnInit(): void {
   this.getAllProducts();
   this.getAllCategories();
  }
//Get Products
products:IProduct[]
  getAllProducts(){
  this.shopService.getProducts(this.CategoryId,this.SortSelected).subscribe({
    next:((value:IPagination)=>{
this.products=value.data;
    })
  });
  }

  // Get Categories
Categories:ICategory []
CategoryId:number
  getAllCategories(){
 this.shopService.getCategories().subscribe({
    next:((value)=>{
this.Categories=value;
console.log(this.Categories);
  })

});
}

selectedId(categoryId:number){
  this.CategoryId=categoryId;
  this.getAllProducts();
}

//Sorting Price
SortingOptions=[
  {name:"Price",value:'Name'},
  {name:"Price:min-max",value:'PriceAce'},
  {name:"Price:max-min",value:'PriceDce'}
]

SortSelected:string
SortingByPrice(sort:Event){
this.SortSelected=(sort.target as HTMLInputElement).value;
this.getAllProducts();
}
}
