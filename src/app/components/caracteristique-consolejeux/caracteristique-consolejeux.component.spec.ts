import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristiqueConsolejeuxComponent } from './caracteristique-consolejeux.component';

describe('CaracteristiqueConsolejeuxComponent', () => {
  let component: CaracteristiqueConsolejeuxComponent;
  let fixture: ComponentFixture<CaracteristiqueConsolejeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristiqueConsolejeuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristiqueConsolejeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
