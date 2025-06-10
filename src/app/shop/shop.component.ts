import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShopService } from './shop.service';
import { IPagination } from '../shared/Models/Pagination';
import { IProduct } from '../shared/Models/Product';
import { ICategory } from '../shared/Models/Category';
import { ProductParam } from '../shared/Models/ProductParam';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit {
  constructor(private shopService: ShopService) {}
  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }
  //Get Products
  products: IProduct[];
  ProductParam = new ProductParam();
  TotalCount: number;
  getAllProducts() {
    this.shopService.getProducts(this.ProductParam).subscribe({
      next: (value: IPagination) => {
        this.products = value.data;
        this.TotalCount = value.totalCount;
        this.ProductParam.PageNumber = value.pageNumber;
        this.ProductParam.PageSize = value.pageSize;
      },
    });
  }

  // Get Categories
  Categories: ICategory[];
  getAllCategories() {
    this.shopService.getCategories().subscribe({
      next: (value) => {
        this.Categories = value;
      },
    });
  }

  selectedId(categoryId: number) {
    this.ProductParam.CategoryId = categoryId;
    this.getAllProducts();
  }

  //Sorting Price
  SortingOptions = [
    { name: 'Price', value: 'Name' },
    { name: 'Price:min-max', value: 'PriceAce' },
    { name: 'Price:max-min', value: 'PriceDce' },
  ];

  SortingByPrice(sort: Event) {
    this.ProductParam.SortSelected = (sort.target as HTMLInputElement).value;
    this.getAllProducts();
  }

  //Filtering by word
  OnSearch(search: string) {
    this.ProductParam.Search = search;
    this.getAllProducts();
  }

  @ViewChild('Search') SearchInput: ElementRef;
  @ViewChild('SortSelected') Selected: ElementRef;
  // Reset All vaues
  OnReset() {
    this.ProductParam.Search = '';
    this.ProductParam.SortSelected = '';
    this.ProductParam.CategoryId = 0;

    this.SearchInput.nativeElement.value = '';
    this.Selected.nativeElement.selectedIndex = 0;

    this.getAllProducts();
  }
  OnChangePage(event: any) {
    this.ProductParam.PageNumber = event;
    this.getAllProducts();
  }
}
