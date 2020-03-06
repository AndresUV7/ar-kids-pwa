import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPcComponent } from './test-pc.component';

describe('TestPcComponent', () => {
  let component: TestPcComponent;
  let fixture: ComponentFixture<TestPcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
