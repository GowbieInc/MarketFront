import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    public message: string = 'Bem vindo!';
    public subtitle: string = 'Por favor, faça seu login ;)'

    constructor() { }
    
    ngOnInit() {
    }
}