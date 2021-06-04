import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTravelbagComponent } from './product-travelbag.component';

describe('ProductTravelbagComponent', () => {
  let component: ProductTravelbagComponent;
  let fixture: ComponentFixture<ProductTravelbagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTravelbagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTravelbagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
