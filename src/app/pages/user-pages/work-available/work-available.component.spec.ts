import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAvailableComponent } from './work-available.component';

describe('WorkAvailableComponent', () => {
  let component: WorkAvailableComponent;
  let fixture: ComponentFixture<WorkAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkAvailableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
