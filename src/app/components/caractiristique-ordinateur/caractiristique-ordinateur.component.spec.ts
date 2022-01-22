import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaractiristiqueOrdinateurComponent } from './caractiristique-ordinateur.component';

describe('CaractiristiqueOrdinateurComponent', () => {
  let component: CaractiristiqueOrdinateurComponent;
  let fixture: ComponentFixture<CaractiristiqueOrdinateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaractiristiqueOrdinateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaractiristiqueOrdinateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
