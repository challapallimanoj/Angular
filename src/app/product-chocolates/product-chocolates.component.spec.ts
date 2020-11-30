import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductChocolatesComponent } from './product-chocolates.component';

describe('ProductChocolatesComponent', () => {
  let component: ProductChocolatesComponent;
  let fixture: ComponentFixture<ProductChocolatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductChocolatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductChocolatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
