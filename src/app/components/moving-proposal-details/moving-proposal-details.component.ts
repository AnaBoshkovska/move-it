import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY } from 'rxjs';

import { MovingProposal } from 'src/app/models';
import { MovingProposalService, OrderService } from 'src/app/services';

@Component({
    selector: 'app-moving-proposal-details',
    templateUrl: './moving-proposal-details.component.html',
    styleUrls: ['./moving-proposal-details.component.scss']
})
export class MovingProposalDetailsComponent implements OnInit {
    private id: number;
    public proposal: MovingProposal;
    public error: string;
    public hasCreatedOrder: boolean = false;

    constructor(private route: ActivatedRoute,
        private movingProposalService: MovingProposalService,
        private orderService: OrderService) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        this.movingProposalService.get(this.id).subscribe({
            next: proposal => {
                this.proposal = proposal;
            }
        })

        this.orderService.getByMovingProposalId(this.id).subscribe({
            next: data => {
                this.hasCreatedOrder = true;
            },
        })
    }

    public placeOrder() {
        this.orderService.add(this.id)
            .subscribe(
                data => {
                    this.hasCreatedOrder = true;
                },
                error => {
                    this.error = "There was an error while placing order."
                });
    }
}
