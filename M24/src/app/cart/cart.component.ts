import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  userid : any;
  cartItems : any;
  result: Number;
  cartLength : any = true;
  quantity : any;
  plusstatus=false;
  constructor(private service : ServiceService, private router: Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.userid = this.route.snapshot.params['id'];
    console.log(this.userid + " user id")
    this.getCartItems();
  }

  getCartItems() {
    this.service.getCartItems(this.userid).subscribe((data) => {
      this.cartItems = data;
      if(this.cartItems.cart.length > 0) {
        this.cartLength = false;
      }
      this.cartItems = this.cartItems.cart;
      
      console.log(this.cartItems);
    });
  }

  decreasequant(i:any, prodid) {
    this.result = Number((document.getElementById("quan" + i) as HTMLInputElement).value);
    if(this.result > 1) {
      this.result = Number(this.result) - 1;
      if(this.result >= 1) {
        (document.getElementById("quan" + i) as HTMLInputElement).value = String(this.result);
      }
      this.service.changeCartQuant(this.result, this.userid, prodid).subscribe((data)=> {
        console.log(data);
      });
    }
  }

  increasequant(i,maxAvail,prodid) {
    // var maxAvail = 5;
    this.result = Number((document.getElementById("quan" + i) as HTMLInputElement).value);
    if (this.result < maxAvail) {
      this.result = Number(this.result) + 1;
      console.log(maxAvail + " avail");
      if(this.result <= maxAvail) {
        (document.getElementById("quan" + i) as HTMLInputElement).value = String(this.result);
      }
      this.service.changeCartQuant(this.result, this.userid, prodid).subscribe((data)=> {
        console.log(data);
      });
    }
    
  }

  removeItem(prodid):any {
    this.service.removeCartItem(this.userid,prodid).subscribe(() => {
      window.location.reload();
    });
  }

  checkOut() {
    this.router.navigate(['/checkoutPage/'+this.userid]);
  }

}
