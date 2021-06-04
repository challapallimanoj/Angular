import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWatchComponent } from './product-watch.component';

describe('ProductWatchComponent', () => {
  let component: ProductWatchComponent;
  let fixture: ComponentFixture<ProductWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
