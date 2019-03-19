import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private router: Router){}

  ngOnInit(){
    this.loginForm = new FormGroup({
     Name : new FormControl(),
      Email: new FormControl(),
      Password: new FormControl()
    })
    this.loginForm.get('Name').valueChanges.subscribe(
      value => {
          console.log(value);
  })
  }

  submit(){


    this.router.navigateByUrl('/third');
   
} 
}