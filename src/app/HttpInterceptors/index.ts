import { HTTP_INTERCEPTORS } from "@angular/common/http"
import { CatchErroHttpInterceptor } from "./catch-error-interceptor"
import { AuthHttpInterceptor } from "./auth-http-intercptor"
import { LogHttpInterceptor } from "./log-interceptor"
import { RetryHttpInterceptor } from "./retry-interceptor"

export const HttpInterceptors = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthHttpInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: RetryHttpInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: CatchErroHttpInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: LogHttpInterceptor,
        multi: true
    }
]