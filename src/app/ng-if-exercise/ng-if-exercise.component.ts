import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-exercise',
  templateUrl: './ng-if-exercise.component.html',
  styleUrls: ['./ng-if-exercise.component.scss']
})
export class NgIfExerciseComponent implements OnInit {
condition = false;
  constructor() { }

  ngOnInit(): void {
  }

}
