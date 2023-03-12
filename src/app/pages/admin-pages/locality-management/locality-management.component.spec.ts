import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalityManagementComponent } from './locality-management.component';

describe('LocalityManagementComponent', () => {
  let component: LocalityManagementComponent;
  let fixture: ComponentFixture<LocalityManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalityManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalityManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
