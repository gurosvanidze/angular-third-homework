import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfExerciseComponent } from './ng-if-exercise.component';

describe('NgIfExerciseComponent', () => {
  let component: NgIfExerciseComponent;
  let fixture: ComponentFixture<NgIfExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfExerciseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIfExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
