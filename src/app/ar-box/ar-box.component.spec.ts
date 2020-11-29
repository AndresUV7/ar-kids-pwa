import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArBoxComponent } from './ar-box.component';

describe('ArBoxComponent', () => {
  let component: ArBoxComponent;
  let fixture: ComponentFixture<ArBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
