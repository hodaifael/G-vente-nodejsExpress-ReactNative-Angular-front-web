import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductclientoffreComponent } from './productclientoffre.component';

describe('ProductclientoffreComponent', () => {
  let component: ProductclientoffreComponent;
  let fixture: ComponentFixture<ProductclientoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductclientoffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductclientoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
