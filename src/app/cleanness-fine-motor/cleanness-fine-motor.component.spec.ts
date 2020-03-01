import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleannessFineMotorComponent } from './cleanness-fine-motor.component';

describe('CleannessFineMotorComponent', () => {
  let component: CleannessFineMotorComponent;
  let fixture: ComponentFixture<CleannessFineMotorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleannessFineMotorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleannessFineMotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
