import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingProposalsComponent } from './moving-proposals.component';

describe('MovingProposalsComponent', () => {
    let component: MovingProposalsComponent;
    let fixture: ComponentFixture<MovingProposalsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MovingProposalsComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MovingProposalsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
