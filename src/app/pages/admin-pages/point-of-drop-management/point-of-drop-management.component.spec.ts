import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointOfDropManagementComponent } from './point-of-drop-management.component';

describe('PointOfDropManagementComponent', () => {
  let component: PointOfDropManagementComponent;
  let fixture: ComponentFixture<PointOfDropManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointOfDropManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointOfDropManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
