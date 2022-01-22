import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductclientenattendComponent } from './productclientenattend.component';

describe('ProductclientenattendComponent', () => {
  let component: ProductclientenattendComponent;
  let fixture: ComponentFixture<ProductclientenattendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductclientenattendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductclientenattendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
