import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollissimoComponent } from './collissimo.component';

describe('CollissimoComponent', () => {
  let component: CollissimoComponent;
  let fixture: ComponentFixture<CollissimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollissimoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollissimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
