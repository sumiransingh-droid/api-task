import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
url="https://api.review.sharajman.com/external-api/employees"
  constructor( private http:HttpClient) { }
  users(){
    // let headers = {
    //   'Authorization': 'Bearer Shrajman12323'
    // }
    // return this.http.get(this.url,{headers})
    return this.http.get(this.url)
    
}
}
