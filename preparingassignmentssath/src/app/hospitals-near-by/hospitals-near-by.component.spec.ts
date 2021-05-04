import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalsNearByComponent } from './hospitals-near-by.component';

describe('HospitalsNearByComponent', () => {
  let component: HospitalsNearByComponent;
  let fixture: ComponentFixture<HospitalsNearByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalsNearByComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalsNearByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
