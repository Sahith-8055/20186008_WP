import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems : any;
  userid : any;
  placedOrder = false;

  totalPrice:number = 0;
  name:any;
  email:any;
  phone : any;
  address : any;
  wall :any;
  red :any = false;
  cart:any;
  newtotal : any;

  constructor(private service : ServiceService, private router: Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.userid = this.route.snapshot.params['id'];
    this.getCartItems();
  }

  getCartItems() {
    this.service.getCartItems(this.userid).subscribe((data) => {
      this.cartItems = data;
      console.log(this.cartItems);
      this.name =this.cartItems.name;
      this.phone = this.cartItems.phone;
      this.email = this.cartItems.email;
      this.cart = this.cartItems.cart;
      this.address = this.cartItems.address;
      // console.log(this.cart[0].title + "cartval");
      this.wall = this.cartItems.wallet;
      //console.log(this.cartItems);
      for(var i =0;i<this.cartItems.cart.length;i++){
          this.totalPrice = this.totalPrice + (this.cartItems.cart[i].price * this.cartItems.cart[i].need);
        }
    });
    // console.log(this.address + "address");
  }

  placeOrder(){
    console.log(this.address);
    
    this.service.placeOrder(this.userid,
                                this.name,
                                this.phone,
                                this.email,
                                this.address,
                                this.cart,
                                this.totalPrice, this.wall).subscribe((data) => { 
                                  window.location.href = '/orderCompleted';    
    });
    alert("Order Placed");
    this.router.navigate(['/home']);

  }
  
}
