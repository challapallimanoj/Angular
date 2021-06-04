import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsCondtionsComponent } from './terms-condtions.component';

describe('TermsCondtionsComponent', () => {
  let component: TermsCondtionsComponent;
  let fixture: ComponentFixture<TermsCondtionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsCondtionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsCondtionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
