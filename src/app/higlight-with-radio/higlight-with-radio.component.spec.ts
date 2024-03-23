import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiglightWithRadioComponent } from './higlight-with-radio.component';

describe('HiglightWithRadioComponent', () => {
  let component: HiglightWithRadioComponent;
  let fixture: ComponentFixture<HiglightWithRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiglightWithRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiglightWithRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
