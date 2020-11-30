import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRefridgeratorComponent } from './product-refridgerator.component';

describe('ProductRefridgeratorComponent', () => {
  let component: ProductRefridgeratorComponent;
  let fixture: ComponentFixture<ProductRefridgeratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRefridgeratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRefridgeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
