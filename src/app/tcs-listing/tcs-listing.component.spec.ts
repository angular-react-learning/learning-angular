import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcsListingComponent } from './tcs-listing.component';

describe('TcsListingComponent', () => {
  let component: TcsListingComponent;
  let fixture: ComponentFixture<TcsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
