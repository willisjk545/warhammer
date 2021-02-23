import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCellRendererComponent } from './btn-cell-renderer.component';

describe('BtnCellRendererComponent', () => {
  let component: BtnCellRendererComponent;
  let fixture: ComponentFixture<BtnCellRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnCellRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
