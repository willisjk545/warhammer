import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUnitModalComponent } from './edit-unit-modal.component';

describe('EditUnitModalComponent', () => {
  let component: EditUnitModalComponent;
  let fixture: ComponentFixture<EditUnitModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUnitModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUnitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
