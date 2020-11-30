import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAcComponent } from './product-ac.component';

describe('ProductAcComponent', () => {
  let component: ProductAcComponent;
  let fixture: ComponentFixture<ProductAcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
