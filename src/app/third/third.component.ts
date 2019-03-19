import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user-data';
import { Observable } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {


   showDetails = false;
   selectedid: number;

  users: User[]=[];

  constructor( private dataservice: DataService) { }


  ngOnInit() {
    this.getUsers();
    //this.getUser(id);
  }

  getUsers(){
    this.dataservice.getUsers().subscribe(data =>{
      this.users=data;
    })
  }


  // getUser(id) {
  //   this.dataservice.getUser().subscribe(data => {
  //     this.user = data;
  //   });
  // }
//   User(data){
//   this.showDetails = true;
//   this.selectedid = data;
// }
  productdetails(data){
    this.showDetails = true;
    this.selectedid = data;

}


show(selectedid){
  console.log(selectedid);
}

  
}
