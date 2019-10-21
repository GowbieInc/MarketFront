import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class RedirectService {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  redirectNotCleaningQueryParams(pathName: string, queryParams?: any): void {
    let qParams;
    const queryParamsOrig = Object.assign({}, this.activatedRoute.snapshot.queryParams);

    if (queryParams && queryParams.queryParams) {
      qParams = this.mergeQueryParams({ queryParams: queryParamsOrig }, queryParams);
    } else {
      qParams = { queryParams: queryParamsOrig };
    }

    this.navigate(pathName, qParams);
  }

  redirectCleaningQueryParams(pathName: string, queryParams?: any): void {
    this.navigate(pathName, queryParams);
  }
  private mergeQueryParams(queryParams: any, queryParamsToAdd: any): any {
    const qParams = queryParams;

    Object.keys(queryParamsToAdd.queryParams).forEach(key => {
      qParams.queryParams[key] = queryParamsToAdd.queryParams[key];
    });

    return qParams;
  }

  private navigate(pathName: string, queryParams?: any): void {
    this.router.navigate([pathName], queryParams);
  }
}
