import { SessionStorage } from '../storage/session-storage/session-storage.service';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

    private sessionIdKey: string = 'session-Id';

    constructor(
        private sessionStorage: SessionStorage
    ) { }

    public saveSessionId(id: string) {
        this.sessionStorage.setItem(this.sessionIdKey, id);
    }

    public getSessionId() {
        return this.sessionStorage.getItem(this.sessionIdKey)
    }

    public clearSessionId() {
        this.sessionStorage.removeItem(this.sessionIdKey);
    }
}
