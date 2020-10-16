import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenteLearnComponent } from './asistente-learn.component';

describe('AsistenteLearnComponent', () => {
  let component: AsistenteLearnComponent;
  let fixture: ComponentFixture<AsistenteLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsistenteLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenteLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
