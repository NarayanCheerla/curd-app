import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";


export class CatchErroHttpInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
        .pipe(
        catchError((error: HttpErrorResponse)=>{
            console.log(`Http Error : ${req.method}`);
            return throwError(error);
        }));
    }
}
