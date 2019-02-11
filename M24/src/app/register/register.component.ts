import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {ServiceService } from '../service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private serve : ServiceService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      number: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // cnfrmpwd: ['', [Validators.required, Validators.minLength(6), pwdvalidator]],
      address: ['']
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit(firstname, number, email, password, address) {
    this.serve.adduser(firstname, number, email, password, address).subscribe((data) => {
      console.log(data);
      if(data) {
        alert('registration successful');
        this.router.navigate(['/login']);
      }
    });
  }

  

}
