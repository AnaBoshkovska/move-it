import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingProposalAddComponent } from './moving-proposal-add.component';

describe('MovingProposalAddComponent', () => {
  let component: MovingProposalAddComponent;
  let fixture: ComponentFixture<MovingProposalAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovingProposalAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingProposalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
