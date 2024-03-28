import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  

  constructor() {}

  intercept(request: HttpRequest<any>, 
    next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken="Bearer Shrajman12323"
    

    if (authToken) {
      // Clone the request and attach the token
      const authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
    
    
      return next.handle(authReq);
    }
    return next.handle(request);
  }
  
}

