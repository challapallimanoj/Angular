import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBabyShoesComponent } from './product-baby-shoes.component';

describe('ProductBabyShoesComponent', () => {
  let component: ProductBabyShoesComponent;
  let fixture: ComponentFixture<ProductBabyShoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBabyShoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBabyShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
