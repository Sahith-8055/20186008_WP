import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  uri = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  adduser(firstname, number, email, password, address) {
    var user= {
      firstname :firstname,
      number : number,
      email : email,
      password : password,
      address : address
    };
    return this.http.post(`${this.uri}/user/add`, user);
  }

  login(email, password) {
    var loginuser = {
        email : email,
        password : password
      };
      return this.http.post(`${this.uri}/user/login`, loginuser);
  }

  getProducts() {
    return this.http.get(`${this.uri}/products`);
  }

  getProductDetails(id) {
    var data ={
      id: id
    }
    return this.http.post(`${this.uri}/product/details`, data);
  }

  // getAllproducts() {
  //   return this.http.get(`${this.uri}/getallProducts`);
  // }
  // getproduct(id:any) {
  //   return this.http.get(`${this.uri}/getproduct/${id}`);
  // }

  getUser(){
    return this.http.get(`${this.uri}/user`);
  }

  addtocart(userid, prodid, title, image, price, quantity, need) {
    // console.log(title + "product title");
    var usercatprods = {
      userid : userid,
      prodid : prodid,
      title : title,
      image : image,
      price : price,
      need : need,
      quantity : quantity
    }
    // console.log(usercatprods);
    return this.http.post(`${this.uri}/user/addcart`, usercatprods);
  }

  getCartItems(userid) {
    return this.http.get(`${this.uri}/getCartItems/${userid}`);
  }

  getUserDetails(userid) {
    return this.http.get(`${this.uri}/getUserDetails/${userid}`);
  }

  changeCartQuant(i, userid, prodid) {
    var cartUpdatedetails = {
      userid : userid,
      quantity : i,
      prodid : prodid
    }
    return this.http.post(`${this.uri}/user/changeCart`, cartUpdatedetails);
  }

  removeCartItem(userid, prodid) {
    var cartDetails = {
      userid : userid,
      prodid : prodid
    }
    return this.http.post(`${this.uri}/user/removeFromCart`, cartDetails);
  }

  logout() {
    return this.http.get(`${this.uri}/logout`);
  }

  saveComment(userid : any,prodid : any,comment : any) {
    var commentarray = {
      userid : userid,
      prodid : prodid,
      comment : comment
    };
    console.log(commentarray + "comments array");
    return this.http.post(`${this.uri}/product/comment`, commentarray);
 }

 addAddress(userid,address){
  var addr = {
    userid : userid,
    address :  address
  }
  return this.http.post(`${this.uri}/user/addAddress`, addr);
  }

  placeOrder(userid,name,phone,email,address,cart,totalPrice,wallet){
    var orderDetails = {
      userid :userid,
      name :name,
      phone : phone,
      email : email,
      address: address,
      cart : cart,
      totalPrice :totalPrice,
      wallet : wallet
    }
    return this.http.post(`${this.uri}/orders/add`, orderDetails);

  }
}
