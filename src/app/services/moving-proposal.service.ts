import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ConfigService } from 'src/shared/core/services/config.service';
import { MovingProposal } from '../models';

@Injectable({
    providedIn: 'root'
})
export class MovingProposalService {
    private serviceUrl: string;

    constructor(private httpClient: HttpClient, private configService: ConfigService) {
        this.serviceUrl = this.configService.getApiBaseUrl();
    }

    getAll(): Observable<MovingProposal[]> {
        var route = `${this.serviceUrl}/api/movingProposals`;
        return this.httpClient.get<MovingProposal[]>(route).pipe(
            catchError(this.handleError)
        );
    }

    get(id: number): Observable<MovingProposal> {
        var route = `${this.serviceUrl}/api/movingProposals/${id}`;
        return this.httpClient.get<MovingProposal>(route).pipe(
            catchError(this.handleError)
        );
    }

    add(proposal: MovingProposal): Observable<MovingProposal> {
        var route = `${this.configService.getApiBaseUrl()}/api/movingProposals`;
        return this.httpClient.post<MovingProposal>(route, proposal).pipe(
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
