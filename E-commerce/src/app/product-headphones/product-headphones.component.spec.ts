import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHeadphonesComponent } from './product-headphones.component';

describe('ProductHeadphonesComponent', () => {
  let component: ProductHeadphonesComponent;
  let fixture: ComponentFixture<ProductHeadphonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductHeadphonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHeadphonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
