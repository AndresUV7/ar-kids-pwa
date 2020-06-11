import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HygieneAntistressSkillComponent } from './hygiene-antistress-skill.component';

describe('HygieneAntistressSkillComponent', () => {
  let component: HygieneAntistressSkillComponent;
  let fixture: ComponentFixture<HygieneAntistressSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HygieneAntistressSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HygieneAntistressSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
