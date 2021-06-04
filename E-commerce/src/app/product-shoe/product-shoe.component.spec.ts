import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShoeComponent } from './product-shoe.component';

describe('ProductShoeComponent', () => {
  let component: ProductShoeComponent;
  let fixture: ComponentFixture<ProductShoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductShoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
