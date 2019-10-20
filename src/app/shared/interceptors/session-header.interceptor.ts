import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { AuthService } from "../services/auth/auth.service";

import { EStatusCode } from './../models/enums/EStatusCode.enum';

@Injectable()
export class SessionHeaderInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = this.addAuthenticationHeader(request);

        return next
            .handle(request)
            .pipe(
                tap(event => event instanceof HttpResponse && this.interceptHeader(event.headers)),
                catchError((error) => this.handleError(error))
            );
    }

    private addAuthenticationHeader(request: HttpRequest<any>): HttpRequest<any> {
        const sessionId = this.authService.getSessionId();

        if (!sessionId) {
            return request;
        }

        return request.clone({ setHeaders: { "session-Id": sessionId } });
    }

    private interceptHeader(headers: HttpHeaders) {
        const sessionId: string = headers.get("session-Id");

        if (!sessionId) {
            return;
        }

        this.authService.saveSessionId(sessionId);
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            return throwError(error);
        } else {
            if (error.status === EStatusCode.UNAUTHORIZED) {
                return throwError('Usuário não autorizado!');
            }
        }

        return throwError(error);
    }
}
