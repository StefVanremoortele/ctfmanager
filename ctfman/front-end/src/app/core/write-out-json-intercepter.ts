import { HttpInterceptor } from "@angular/common/http/src/interceptor";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
    HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { map, tap } from 'rxjs/operators';

export class WriteOutJsonInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(tap(data => console.log(JSON.stringify(data, null, "\t"))))
    };
  }
