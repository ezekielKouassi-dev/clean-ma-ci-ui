import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSuccessComponent } from './work-success.component';

describe('WorkSuccessComponent', () => {
  let component: WorkSuccessComponent;
  let fixture: ComponentFixture<WorkSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
