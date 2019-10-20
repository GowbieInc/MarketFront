import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  get(url: string, queryParams?: any) {
    const options = {
      headers: this.buildHeader(),
      params: this.buildParameters(queryParams),
      responseType: 'text' as 'text'
    };
    return this.http.get(url, options).pipe(map(this.dataToJson));
  }

  getRaw(url: string, queryParams?: any) {
    const options = {
      headers: this.buildHeader(),
      params: this.buildParameters(queryParams),
      responseType: 'text' as 'text'
    };
    return this.http.get(url, options);
  }

  getJson(url: string, queryParams?: any) {
    const options = {
      headers: this.buildHeader(),
      params: this.buildParameters(queryParams),
      responseType: 'json' as 'json'
    };
    return this.http.get<any>(url, options);
  }

  post(url: string, params?: any) {
    const options = {
      headers: this.buildHeader(),
      responseType: 'text' as 'text'
    };
    return this.http.post(url, params, options).pipe(map(this.dataToJson));
  }

  postJson(url: string, params?: any) {
    const options = {
      headers: this.buildHeader(),
      responseType: 'json' as 'json'
    };
    
    return this.http.post<any>(url, params, options);
  }

  postForm(url: string, params?: any) {
    let body = new FormData();

    Object.keys(params).forEach(key => {
      const value = params[key];
      body.append(key, value);
    });

    const options = {
      responseType: 'text' as 'text'
    };

    return this.http.post(url, body, options).pipe(map(this.dataToJson));
  }

  private buildHeader(): HttpHeaders {
    return new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
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
