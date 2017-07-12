import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gridexim } from './gridexim';

describe('HomeComponent', () => {
  let component: Gridexim;
  let fixture: ComponentFixture<Gridexim>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gridexim ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gridexim);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
