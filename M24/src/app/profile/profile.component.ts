import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails :any;
  userid : any;
  newaddress = "";
  constructor(private service : ServiceService, private router: Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.userid = this.route.snapshot.params['id'];
    this.getUserDetails();
  }

  getUserDetails() {
    this.service.getUserDetails(this.userid).subscribe((data) => {
      this.userDetails = data;
      console.log(this.userDetails);
    });
  }

  addAddress() {
    if(this.newaddress != "") {
      this.service.addAddress(this.userid,this.newaddress).subscribe((data) => {
        console.log(data + "address");
        window.location.href = '/profile/'+this.userid;
      });
    }
  }
}
