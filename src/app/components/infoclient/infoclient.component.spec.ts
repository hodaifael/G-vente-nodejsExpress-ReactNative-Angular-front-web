import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoclientComponent } from './infoclient.component';

describe('InfoclientComponent', () => {
  let component: InfoclientComponent;
  let fixture: ComponentFixture<InfoclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
