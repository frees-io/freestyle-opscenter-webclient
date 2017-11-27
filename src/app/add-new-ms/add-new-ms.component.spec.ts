import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewMsComponent } from './add-new-ms.component';

describe('AddNewMsComponent', () => {
  let component: AddNewMsComponent;
  let fixture: ComponentFixture<AddNewMsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewMsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewMsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
