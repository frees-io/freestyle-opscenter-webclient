import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavGridComponent } from './nav-grid.component';

describe('NavGridComponent', () => {
  let component: NavGridComponent;
  let fixture: ComponentFixture<NavGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
