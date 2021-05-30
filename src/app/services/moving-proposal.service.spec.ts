import { TestBed } from '@angular/core/testing';

import { MovingProposalService } from './moving-proposal.service';

describe('MovingProposalService', () => {
    let service: MovingProposalService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MovingProposalService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
