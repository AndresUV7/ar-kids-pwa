import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificaloComponent } from './clasificalo.component';

describe('ClasificaloComponent', () => {
  let component: ClasificaloComponent;
  let fixture: ComponentFixture<ClasificaloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasificaloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
