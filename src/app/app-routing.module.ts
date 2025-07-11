import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {
    path:'shop'
    ,loadChildren:()=>import('./shop/shop.module').then(s=>s.ShopModule)
  },
  {
    path:'basket'
    ,loadChildren:()=>import('./basket/basket.module').then(s=>s.BasketModule)
  },
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
