import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightWithRadioTwoComponent } from './highlight-with-radio-two.component';

describe('HighlightWithRadioTwoComponent', () => {
  let component: HighlightWithRadioTwoComponent;
  let fixture: ComponentFixture<HighlightWithRadioTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightWithRadioTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightWithRadioTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
