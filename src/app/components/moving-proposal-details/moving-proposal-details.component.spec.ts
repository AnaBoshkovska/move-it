import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingProposalDetailsComponent } from './moving-proposal-details.component';

describe('MovingProposalDetailsComponent', () => {
    let component: MovingProposalDetailsComponent;
    let fixture: ComponentFixture<MovingProposalDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MovingProposalDetailsComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MovingProposalDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
