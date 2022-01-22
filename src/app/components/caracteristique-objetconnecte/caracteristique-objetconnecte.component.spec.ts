import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristiqueObjetconnecteComponent } from './caracteristique-objetconnecte.component';

describe('CaracteristiqueObjetconnecteComponent', () => {
  let component: CaracteristiqueObjetconnecteComponent;
  let fixture: ComponentFixture<CaracteristiqueObjetconnecteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristiqueObjetconnecteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristiqueObjetconnecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
