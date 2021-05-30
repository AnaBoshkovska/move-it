import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import * as authComponents from './components';
import { jwtInterceptorProvider } from './interceptors';

@NgModule({
    declarations: [
        ...authComponents.components
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    providers: [
        jwtInterceptorProvider
    ]
})
export class AuthModule { }
