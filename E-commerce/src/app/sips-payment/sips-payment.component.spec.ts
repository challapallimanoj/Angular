import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SipsPaymentComponent } from './sips-payment.component';

describe('SipsPaymentComponent', () => {
  let component: SipsPaymentComponent;
  let fixture: ComponentFixture<SipsPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SipsPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SipsPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
