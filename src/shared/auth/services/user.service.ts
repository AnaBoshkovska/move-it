import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ConfigService } from 'src/shared/core/services/config.service';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient, private configService: ConfigService) { }

    register(user: User) {
        var route = `${this.configService.getApiBaseUrl()}/api/auth/register`;
        return this.httpClient.post(route, user);
    }
}
