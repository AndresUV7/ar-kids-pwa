import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuentraloGeoComponent } from './encuentralo-geo.component';

describe('EncuentraloGeoComponent', () => {
  let component: EncuentraloGeoComponent;
  let fixture: ComponentFixture<EncuentraloGeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuentraloGeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuentraloGeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
