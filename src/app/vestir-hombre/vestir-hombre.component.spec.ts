import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VestirHombreComponent } from './vestir-hombre.component';

describe('VestirHombreComponent', () => {
  let component: VestirHombreComponent;
  let fixture: ComponentFixture<VestirHombreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VestirHombreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VestirHombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
