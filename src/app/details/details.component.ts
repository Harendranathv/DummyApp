 import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
 import { DataService } from '../data.service';
 import { Details } from '../ProductDetails';
 import { Router } from '@angular/router';


 @Component({
  selector: 'app-details',
   templateUrl: './details.component.html',
   styleUrls: ['./details.component.css']
 })
export class DetailsComponent implements OnInit, OnChanges {
  @Input() id: number;
//  // @Output() showProduct = new EventEmitter;
   details: Details[];

   constructor(private dataservice: DataService, private router: Router) { }
 ngOnInit(){
   //this.router.navigate(['/Cart']);
   }

Add(){
//     // this.showProduct.emit(this.id);
    this.router.navigate(['/Cart']);
  }
  ngOnChanges() {
    console.log(this.id);
    this.getProductDetails();
   }

   getProductDetails(){
     this.dataservice.getProductDetails(this.id).subscribe(data =>{
       this.details=data;
     })
   }
 }
