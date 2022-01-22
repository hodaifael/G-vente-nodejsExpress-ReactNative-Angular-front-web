import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristiquesTelComponent } from './caracteristiques-tel.component';

describe('CaracteristiquesTelComponent', () => {
  let component: CaracteristiquesTelComponent;
  let fixture: ComponentFixture<CaracteristiquesTelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristiquesTelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristiquesTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
