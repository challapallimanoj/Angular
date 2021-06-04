import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCricketbatComponent } from './product-cricketbat.component';

describe('ProductCricketbatComponent', () => {
  let component: ProductCricketbatComponent;
  let fixture: ComponentFixture<ProductCricketbatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCricketbatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCricketbatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
