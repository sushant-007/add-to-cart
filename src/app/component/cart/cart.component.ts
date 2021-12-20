import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public product : any = [];
  public grandTotal !: number ;
  constructor(private cartServices : CartService){ }

  

  ngOnInit(): void {
    this.cartServices.getProducts()
    .subscribe(res =>{
      this.product = res;
      this.grandTotal = this.cartServices.getTotalPrice();


    })
  }
  removeItem(item: any){
   this.cartServices.removeCartItem(item); 
  }
  emptycart(){
    this.cartServices.removeAllCart();
  }

}
