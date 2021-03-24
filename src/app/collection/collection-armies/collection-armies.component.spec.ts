import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionArmiesComponent } from './collection-armies.component';

describe('CollectionArmiesComponent', () => {
  let component: CollectionArmiesComponent;
  let fixture: ComponentFixture<CollectionArmiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionArmiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionArmiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
