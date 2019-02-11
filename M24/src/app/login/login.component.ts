import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
// import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  checklogin(email,password) {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }
    console.log("login component ts");
    this.service.login(email,password).subscribe((data) => {
      console.log(data);
      if(data) {
        alert('logged in');
        this.router.navigate(['/home']);
      } else {
        console.log('not a user');
      }
    });
  }

}
