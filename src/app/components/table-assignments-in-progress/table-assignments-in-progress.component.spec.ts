import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAssignmentsInProgressComponent } from './table-assignments-in-progress.component';

describe('TableAssignmentsInProgressComponent', () => {
  let component: TableAssignmentsInProgressComponent;
  let fixture: ComponentFixture<TableAssignmentsInProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAssignmentsInProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAssignmentsInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
