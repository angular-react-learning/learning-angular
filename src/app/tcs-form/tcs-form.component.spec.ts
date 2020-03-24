import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcsFormComponent } from './tcs-form.component';

describe('TcsFormComponent', () => {
  let component: TcsFormComponent;
  let fixture: ComponentFixture<TcsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
