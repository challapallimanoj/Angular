import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBabyStrollerComponent } from './product-baby-stroller.component';

describe('ProductBabyStrollerComponent', () => {
  let component: ProductBabyStrollerComponent;
  let fixture: ComponentFixture<ProductBabyStrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBabyStrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBabyStrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
