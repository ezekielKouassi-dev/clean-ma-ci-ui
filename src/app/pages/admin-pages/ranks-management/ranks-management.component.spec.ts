import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RanksManagementComponent } from './ranks-management.component';

describe('RanksManagementComponent', () => {
  let component: RanksManagementComponent;
  let fixture: ComponentFixture<RanksManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RanksManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RanksManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
