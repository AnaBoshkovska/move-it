import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MovingProposalService } from 'src/app/services';

@Component({
    selector: 'app-moving-proposal-add',
    templateUrl: './moving-proposal-add.component.html',
    styleUrls: ['./moving-proposal-add.component.scss']
})
export class MovingProposalAddComponent implements OnInit {
    public proposalForm: FormGroup;
    public error: string;
    public submitted: boolean = false;

    get form() {
        return this.proposalForm.controls;
    }

    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private movingProposalService: MovingProposalService) { }

    ngOnInit(): void {
        this.proposalForm = this.formBuilder.group({
            addressFrom: ['', Validators.required],
            addressTo: ['', Validators.required],
            distance: [0, [Validators.required, Validators.min(1)]],
            livingAreaSurface: [0, [Validators.required, Validators.min(1)]],
            atticAreaSurface: [0, Validators.required],
            hasPiano: [false],
            needsPackingAssistance: [false]
        })
    }

    onSubmit() {
        this.submitted = true;
        this.error = "";
        if (this.proposalForm.invalid) {
            return;
        }

        this.movingProposalService.add(this.proposalForm.value)
            .subscribe(
                data => {
                    this.router.navigate(['/proposals', data.id]);
                },
                error => {
                    this.error = "There was an error while registering service."
                });
    }
}
