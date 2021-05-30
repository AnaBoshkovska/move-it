import { Component, OnInit } from '@angular/core';

import { MovingProposal } from 'src/app/models';
import { MovingProposalService } from 'src/app/services';

@Component({
    selector: 'app-moving-proposals',
    templateUrl: './moving-proposals.component.html',
    styleUrls: ['./moving-proposals.component.scss']
})
export class MovingProposalsComponent implements OnInit {
    public movingProposals: MovingProposal[];
    public hasProposals: boolean = false;

    constructor(private movingProposalService: MovingProposalService) { }

    ngOnInit(): void {
        this.movingProposalService.getAll().subscribe({
            next: movingProposals => {
                this.movingProposals = movingProposals;
                this.hasProposals = movingProposals.length > 0;
            }
        })
    }
}
