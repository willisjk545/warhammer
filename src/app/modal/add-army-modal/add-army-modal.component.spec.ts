import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArmyModalComponent } from './add-army-modal.component';

describe('AddArmyModalComponent', () => {
  let component: AddArmyModalComponent;
  let fixture: ComponentFixture<AddArmyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddArmyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArmyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
