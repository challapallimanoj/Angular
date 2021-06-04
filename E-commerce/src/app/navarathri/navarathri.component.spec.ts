import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavarathriComponent } from './navarathri.component';

describe('NavarathriComponent', () => {
  let component: NavarathriComponent;
  let fixture: ComponentFixture<NavarathriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavarathriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavarathriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
