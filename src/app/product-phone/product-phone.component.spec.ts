import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPhoneComponent } from './product-phone.component';

describe('ProductPhoneComponent', () => {
  let component: ProductPhoneComponent;
  let fixture: ComponentFixture<ProductPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
