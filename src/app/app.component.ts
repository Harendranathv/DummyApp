import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RoutingDemo';


  constructor(private router: Router){}
    

    signOut(){
      this.router.navigate(['/next']);
    }
  }

