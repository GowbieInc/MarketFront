import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

import { FrameComponent } from './frame/frame.component';
import { LoginComponent } from './login-component/login.component';

const ROUTES = [
    {
        path: '',
        component: FrameComponent,
        children: [
            {
                path:'',
                component: LoginComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }