import { FrameComponent } from './frame/frame.component';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const ROUTES = [
    {
        path: '',
        component: FrameComponent,
        children: []
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }