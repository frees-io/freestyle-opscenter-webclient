import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsViewerComponent } from './ms-viewer.component';

describe('MsViewerComponent', () => {
  let component: MsViewerComponent;
  let fixture: ComponentFixture<MsViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
