import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from './api.service';
import { HttpServiceModule } from '../http/http-service.module';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    HttpServiceModule
  ],
  exports: [ ],
  providers: [
    ApiService
  ]
})
export class ApiServiceModule { }
