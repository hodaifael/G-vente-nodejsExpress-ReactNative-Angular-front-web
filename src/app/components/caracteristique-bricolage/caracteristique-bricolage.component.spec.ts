import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristiqueBricolageComponent } from './caracteristique-bricolage.component';

describe('CaracteristiqueBricolageComponent', () => {
  let component: CaracteristiqueBricolageComponent;
  let fixture: ComponentFixture<CaracteristiqueBricolageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristiqueBricolageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristiqueBricolageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
