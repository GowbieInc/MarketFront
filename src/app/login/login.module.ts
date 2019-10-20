import { NgModule } from "@angular/core";

import { SharedModule } from './../shared/shared.module';
import { LoginRoutingModule } from './login-route.module';

import { FrameComponent } from './frame/frame.component';

@NgModule({
    declarations:[
        FrameComponent
    ],
    imports: [
        SharedModule,
        LoginRoutingModule
    ],
    exports: [],
    providers: [

    ]
})
export class LoginModule { }