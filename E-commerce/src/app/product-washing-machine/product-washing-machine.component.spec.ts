import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWashingMachineComponent } from './product-washing-machine.component';

describe('ProductWashingMachineComponent', () => {
  let component: ProductWashingMachineComponent;
  let fixture: ComponentFixture<ProductWashingMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductWashingMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWashingMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
