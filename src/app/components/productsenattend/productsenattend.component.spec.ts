import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsenattendComponent } from './productsenattend.component';

describe('ProductsenattendComponent', () => {
  let component: ProductsenattendComponent;
  let fixture: ComponentFixture<ProductsenattendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsenattendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsenattendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
