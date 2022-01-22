import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductclientcontreComponent } from './productclientcontre.component';

describe('ProductclientcontreComponent', () => {
  let component: ProductclientcontreComponent;
  let fixture: ComponentFixture<ProductclientcontreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductclientcontreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductclientcontreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
