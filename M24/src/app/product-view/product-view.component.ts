import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  productDetails:any;
  user_comment: any = "";
  commentadded : any = false;
  pid : any;
  product: any;
  userid: any;
  available = false;
  constructor(private service: ServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.service.getProductDetails(data.id).subscribe((data) => {
        this.productDetails = data[0];
        this.userid = data[1];
        this.pid = this.productDetails.id;
        console.log(data[1] + "data[1]");
        console.log(this.productDetails.quantity + "here");
        if(this.productDetails.quantity == 0) {
          this.available = true;
        }
      })
    });
    
    
    // this.getproduct();
  }

  // getproduct() {
  //   this.service.getproduct(this.pid).subscribe((data) => {
  //     this.product = data[0];
  //     this.userid = data[1];
  //     console.log(this.pid + "pid");
  //     console.log(data[0] + "data[0]");
  //     console.log(data[1] + "data[1]");
  //   })
  // }

  addtocart(id) {
    var need : any = 1;
    this.service.addtocart(this.userid, id, this.productDetails.title, this.productDetails.imageurl[0], this.productDetails.price, this.productDetails.quantity, need).subscribe((data) => {
      if(data == "exists"){
        alert("Product already exists");
      }
      else if(data  == true) {
        alert("Product added to cart successfully");
      } else {
        alert("You are a guest!!! Please Log In");
        this.router.navigate(['/login']);
      }
    });
  }

  saveComment() {
    console.log(this.user_comment);
    console.log(this.productDetails);
    if(this.user_comment == "") {
      this.commentadded = true;
      console.log(this.commentadded);
      return;
    }
    this.service.saveComment(this.userid, this.productDetails._id , this.user_comment).subscribe((data) => {
       this.user_comment = "";
    });
    window.location.reload();
  }

}
