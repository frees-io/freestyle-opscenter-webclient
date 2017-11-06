import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTreeNodeComponent } from './nav-tree-node.component';

describe('NavTreeNodeComponent', () => {
  let component: NavTreeNodeComponent;
  let fixture: ComponentFixture<NavTreeNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavTreeNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTreeNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
