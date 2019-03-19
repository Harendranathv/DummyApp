import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit{
  nextForm: FormGroup;

  ngOnInit(){
    this.nextForm = new FormGroup({
      Name: new FormControl(),
      Email: new FormControl(),
      Password: new FormControl()
    })
  }

}
