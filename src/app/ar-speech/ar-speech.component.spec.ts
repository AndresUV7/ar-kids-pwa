import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArSpeechComponent } from './ar-speech.component';

describe('ArSpeechComponent', () => {
  let component: ArSpeechComponent;
  let fixture: ComponentFixture<ArSpeechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArSpeechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
