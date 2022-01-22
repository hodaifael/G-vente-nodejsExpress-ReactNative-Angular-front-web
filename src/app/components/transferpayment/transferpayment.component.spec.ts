import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferpaymentComponent } from './transferpayment.component';

describe('TransferpaymentComponent', () => {
  let component: TransferpaymentComponent;
  let fixture: ComponentFixture<TransferpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferpaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
