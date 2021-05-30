import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from 'src/shared/auth/components/login/login.component';
import { RegisterComponent } from 'src/shared/auth/components/register/register.component';
import { AuthGuard } from 'src/shared/auth/guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { MovingProposalAddComponent } from './components/moving-proposal-add/moving-proposal-add.component';
import { MovingProposalDetailsComponent } from './components/moving-proposal-details/moving-proposal-details.component';
import { MovingProposalsComponent } from './components/moving-proposals/moving-proposals.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'proposals/add',
        component: MovingProposalAddComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'proposals/:id',
        component: MovingProposalDetailsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'proposals',
        component: MovingProposalsComponent,
        canActivate: [AuthGuard],
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
