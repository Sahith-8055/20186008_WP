import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user :any;
  userid : any;
  id:any;
  arr:any;

  constructor(private service : ServiceService, private router: Router, private route : ActivatedRoute) { 
    this.getUserorNot();
  }

  ngOnInit() {
    // this.route.params.subscribe(val => {
    //   this.id = this.route.snapshot.paramMap.get('id');
    //   this.service.getCategories(this.id).subscribe((data) => {
    //     this.arr = data;
    //   })
    // })
    this.getUserorNot();
  }

  getUserorNot() {
    this.service.getUser().subscribe((data) => {
      console.log(data + "navbar ts");
      this.userid = data;      
      if(data == "guest") {
        this.user = false;
      } else {
        this.user = true;
      }
    });
  }

  logout() {
    this.service.logout().subscribe((data) => {
      console.log("Logged out");
      this.user = false;
      if(data = "success") {
        window.location.href = '/';
        this.user = false;
      }
      
    });
  }
}
