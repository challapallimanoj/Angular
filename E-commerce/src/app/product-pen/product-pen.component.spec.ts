import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPenComponent } from './product-pen.component';

describe('ProductPenComponent', () => {
  let component: ProductPenComponent;
  let fixture: ComponentFixture<ProductPenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
