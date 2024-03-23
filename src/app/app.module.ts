import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSwitchExerciseComponent } from './ng-switch-exercise/ng-switch-exercise.component';
import { FormsModule } from '@angular/forms';
import { HiglightWithRadioComponent } from './higlight-with-radio/higlight-with-radio.component';
import { HighlithtWithRadioDirective } from './higlight-with-radio/highlitht-with-radio.directive';
import { HighlightWithRadioTwoComponent } from './highlight-with-radio-two/highlight-with-radio-two.component';
import { HighlightWithRadiosTwoDirective } from './highlight-with-radio-two/highlight-with-radios-two.directive';
import { NgIfExerciseComponent } from './ng-if-exercise/ng-if-exercise.component';
@NgModule({
  declarations: [AppComponent, NgSwitchExerciseComponent, HiglightWithRadioComponent, HighlithtWithRadioDirective, HighlightWithRadioTwoComponent, HighlightWithRadiosTwoDirective, NgIfExerciseComponent ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
