import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor,HttpHandler,HttpEvent,HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authService = this.injector.get(AuthService)
    let tokenizedReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
