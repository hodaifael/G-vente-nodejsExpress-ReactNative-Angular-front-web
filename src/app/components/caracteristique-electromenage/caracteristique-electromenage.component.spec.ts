import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristiqueElectromenageComponent } from './caracteristique-electromenage.component';

describe('CaracteristiqueElectromenageComponent', () => {
  let component: CaracteristiqueElectromenageComponent;
  let fixture: ComponentFixture<CaracteristiqueElectromenageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristiqueElectromenageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristiqueElectromenageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
