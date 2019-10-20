import { Injectable } from "@angular/core";

@Injectable()
export class SessionStorage {

    constructor() { }

    public setItem(name: string, value: any) {
        sessionStorage.setItem(name, value);
    }

    public getItem(name: string) {
        return sessionStorage.getItem(name);
    }

    public removeItem(name: string) {
        sessionStorage.removeItem(name);
    }
}
