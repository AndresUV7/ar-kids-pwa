import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandwichMotorSkillsComponent } from './sandwich-motor-skills.component';

describe('SandwichMotorSkillsComponent', () => {
  let component: SandwichMotorSkillsComponent;
  let fixture: ComponentFixture<SandwichMotorSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandwichMotorSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandwichMotorSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
