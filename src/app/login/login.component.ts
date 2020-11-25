import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm:FormGroup
  submitted=false;
  message;

  constructor(private formBuilder: FormBuilder, private  router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : ['', [Validators.required,  Validators.email]],
      password : ['', Validators.required],
    })
  }


  onSubmit(event){
    if(this.loginForm.valid && this.loginForm.value.email=='admin@admin' && this.loginForm.value.password=='1234'){
      this.submitted=true;
      console.log(this.loginForm.value,'true')
      this.router.navigate(['dashboard'])

    }
    else{
      this.message = 'Email or password inocrrect'
      console.log('incorrect values')
    }
  }

}
