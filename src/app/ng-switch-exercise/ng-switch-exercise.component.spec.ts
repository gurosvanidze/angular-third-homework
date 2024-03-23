import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchExerciseComponent } from './ng-switch-exercise.component';

describe('NgSwitchExerciseComponent', () => {
  let component: NgSwitchExerciseComponent;
  let fixture: ComponentFixture<NgSwitchExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSwitchExerciseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSwitchExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
