import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLaptopComponent } from './product-laptop.component';

describe('ProductLaptopComponent', () => {
  let component: ProductLaptopComponent;
  let fixture: ComponentFixture<ProductLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
