import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductclientRefComponent } from './productclient-ref.component';

describe('ProductclientRefComponent', () => {
  let component: ProductclientRefComponent;
  let fixture: ComponentFixture<ProductclientRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductclientRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductclientRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
