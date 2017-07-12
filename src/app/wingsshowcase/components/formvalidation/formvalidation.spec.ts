import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidation } from './formvalidation';

describe('HomeComponent', () => {
  let component: FormValidation;
  let fixture: ComponentFixture<FormValidation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
