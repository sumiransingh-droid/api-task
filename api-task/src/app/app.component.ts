import { Component } from '@angular/core';
import {DataService} from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Api-task';
  loader:boolean=true;
  p:any;
  users:any;
  constructor(private userData: DataService )
  {
    userData.users().subscribe((data)=>
    { 
    
      this.users = data 
      this.loader=false
    });
  }
}
