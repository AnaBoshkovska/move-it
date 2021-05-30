import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { EMPTY, Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ConfigService } from 'src/shared/core/services/config.service';
import { Order } from '../models';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    private serviceUrl: string;

    constructor(private httpClient: HttpClient, private configService: ConfigService) {
        this.serviceUrl = this.configService.getApiBaseUrl();
    }

    getByMovingProposalId(id: number): Observable<Order> {
        var route = `${this.serviceUrl}/api/orders/proposal/${id}`;
        return this.httpClient.get<Order>(route).pipe(
            catchError(err => {return EMPTY})
        );
    }

    add(proposalId: number): Observable<Order> {
        var route = `${this.configService.getApiBaseUrl()}/api/orders`;      
        return this.httpClient.post<Order>(route, { movingProposalId: proposalId }).pipe(
            catchError(this.handleError)
        )
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';

        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }

        return throwError(errorMessage);
    }
}
