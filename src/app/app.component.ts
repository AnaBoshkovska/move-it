import { Component } from '@angular/core';

import { User } from 'src/shared/auth/models/user';
import { AuthenticationService } from 'src/shared/auth/services/authentication.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Move It';
    user: User;

    constructor(private authenticationService: AuthenticationService) {
        this.authenticationService.currentUser.subscribe(x => this.user = x);
    }

    isAdmin() {
        return this.user;
    }

    logout() {
        this.authenticationService.logout();
    }
}
