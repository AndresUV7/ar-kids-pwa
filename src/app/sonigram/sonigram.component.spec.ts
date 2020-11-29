import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonigramComponent } from './sonigram.component';

describe('SonigramComponent', () => {
  let component: SonigramComponent;
  let fixture: ComponentFixture<SonigramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonigramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonigramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
