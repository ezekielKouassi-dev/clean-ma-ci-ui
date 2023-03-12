import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAssignmentsLeaveComponent } from './table-assignments-leave.component';

describe('TableAssignmentsLeaveComponent', () => {
  let component: TableAssignmentsLeaveComponent;
  let fixture: ComponentFixture<TableAssignmentsLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAssignmentsLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAssignmentsLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
