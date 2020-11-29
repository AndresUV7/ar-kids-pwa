import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuentraloComponent } from './encuentralo.component';

describe('EncuentraloComponent', () => {
  let component: EncuentraloComponent;
  let fixture: ComponentFixture<EncuentraloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuentraloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuentraloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
