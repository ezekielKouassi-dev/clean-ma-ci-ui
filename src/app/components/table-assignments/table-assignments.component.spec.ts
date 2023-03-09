import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableAssignmentsComponent } from './table-assignments.component';

describe('TableAssignmentsComponent', () => {
  let component: TableAssignmentsComponent;
  let fixture: ComponentFixture<TableAssignmentsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAssignmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
