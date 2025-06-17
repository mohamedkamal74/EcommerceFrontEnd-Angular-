import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { IProduct } from '../../shared/Models/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private shopservice: ShopService,
    private route: ActivatedRoute
  ) {}
  product: IProduct;

  ngOnInit(): void {
    this.loadProduct();
  }

  mainImage: string;
  loadProduct() {
    this.shopservice
      .getProductDetails(parseInt(this.route.snapshot.paramMap.get('id')))
      .subscribe({
        next: (value: IProduct) => {
          this.product = value;
          this.mainImage = this.product.photos[0].imageName;
        },
      });
  }

  replaceImage(imageSrc: string) {
    this.mainImage = imageSrc;
  }
}
