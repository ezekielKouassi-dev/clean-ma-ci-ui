import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingSocietyManagementComponent } from './processing-society-management.component';

describe('ProcessingSocietyManagementComponent', () => {
  let component: ProcessingSocietyManagementComponent;
  let fixture: ComponentFixture<ProcessingSocietyManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessingSocietyManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessingSocietyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
