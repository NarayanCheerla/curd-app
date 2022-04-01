import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = 'alkdsj38943-e343-34kldsfj3-aldsok34';
        const reqWithAuth = req.clone({
            setHeaders : {
                Authorization : `Bearer ${token}`
            }
        });
        return next.handle(reqWithAuth);
    }
}