import { HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { finalize, Observable } from "rxjs";

export const BYPASS_LOG = new HttpContextToken(() => true);

export class LogHttpInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.context.get(BYPASS_LOG) === true)
        return next.handle(req)
            .pipe(
                finalize(()=>{
                    console.log(`Log : ${req.method} ${req.urlWithParams}`);
                })
            );
        return next.handle(req);
    }
}
