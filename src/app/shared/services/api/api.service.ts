import { HttpService } from './../http/http.service';
import { Injectable } from "@angular/core";

@Injectable()
export class ApiService {
    constructor(private httpService: HttpService) { }
    

    

    private windowOpen(url: string) {
        return window.open(url, '_self');
    }
}