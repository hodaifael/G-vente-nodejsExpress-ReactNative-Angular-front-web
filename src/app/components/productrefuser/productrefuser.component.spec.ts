import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductrefuserComponent } from './productrefuser.component';

describe('ProductrefuserComponent', () => {
  let component: ProductrefuserComponent;
  let fixture: ComponentFixture<ProductrefuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductrefuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductrefuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
