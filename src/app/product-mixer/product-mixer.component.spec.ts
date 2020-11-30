import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMixerComponent } from './product-mixer.component';

describe('ProductMixerComponent', () => {
  let component: ProductMixerComponent;
  let fixture: ComponentFixture<ProductMixerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMixerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMixerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
