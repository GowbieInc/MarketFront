import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(
    private http: HttpClient,
  ) { }

  get(url: string, queryParams?: any, sessionId?: string, userId?: string) {
    const options = {
      headers: this.buildHeader(sessionId, userId),
      params: this.buildParameters(queryParams),
      responseType: 'text' as 'text'
    };
    return this.http.get(url, options).pipe(map(this.dataToJson));
  }

  getRaw(url: string, queryParams?: any, sessionId?: string, userId?: string) {
    const options = {
      headers: this.buildHeader(sessionId, userId),
      params: this.buildParameters(queryParams),
      responseType: 'text' as 'text'
    };
    return this.http.get(url, options);
  }

  getJson(url: string, queryParams?: any, sessionId?: string, userId?: string) {
    const options = {
      headers: this.buildHeader(sessionId, userId),
      params: this.buildParameters(queryParams),
      responseType: 'json' as 'json'
    };
    return this.http.get<any>(url, options);
  }

  post(url: string, params?: any, sessionId?: string, userId?: string) {
    const options = {
      headers: this.buildHeader(sessionId, userId),
      responseType: 'text' as 'text'
    };
    return this.http.post(url, params, options).pipe(map(this.dataToJson));
  }

  postJson(url: string, params?: any, sessionId?: string, userId?: string) {
    const options = {
      headers: this.buildHeader(sessionId, userId),
      responseType: 'json' as 'json'
    };
    
    return this.http.post<any>(url, params, options);
  }

  postForm(url: string, params?: any, sessionId?: string, userId?: string) {
    let body = new FormData();

    Object.keys(params).forEach(key => {
      const value = params[key];
      body.append(key, value);
    });

    const options = {
      headers: this.buildFormHeader(sessionId, userId),
      responseType: 'text' as 'text'
    };

    return this.http.post(url, body, options).pipe(map(this.dataToJson));
  }

  private buildFormHeader(sessionId?: string, userId?: string): HttpHeaders {
    let header;
    
    if (sessionId) {
      header = header.set('session-id', sessionId);
    }
    
    if (userId) {
      header = header.set('user-id', userId);
    }

    return header;
  }

  private buildHeader(sessionId?: string, userId?: string): HttpHeaders {
    let header = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

    if (sessionId) {
      header = header.set('session-id', sessionId);
    }

    if (userId) {
      header = header.set('user-id', userId);
    }

    return header;
  }

  private buildParameters(params: any): HttpParams {
    if (params) {
      let httpParams = new HttpParams();
      Object.keys(params).forEach(key => {
        if (params[key] != null || params[key] !== undefined) {
          httpParams = httpParams.append(key, params[key]);
        }
      });
      return httpParams;
    } else {
      return null;
    }
  }

  private dataToJson(res: string) {
    return res ? JSON.parse(res) : {};
  }
}
