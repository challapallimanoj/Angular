import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTshirtComponent } from './product-tshirt.component';

describe('ProductTshirtComponent', () => {
  let component: ProductTshirtComponent;
  let fixture: ComponentFixture<ProductTshirtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTshirtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTshirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
