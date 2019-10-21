import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";

import { SharedModule } from './../shared/shared.module';
import { LoginRoutingModule } from './login-route.module';

import { FrameComponent } from './frame/frame.component';
import { LoginComponent } from "./login-component/login.component";
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
    declarations:[
        FrameComponent,
        LoginComponent,
        LoginFormComponent
    ],
    imports: [
        SharedModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        FormsModule

    ],
    exports: [ ],
    providers: [ ]
})
export class LoginModule { }