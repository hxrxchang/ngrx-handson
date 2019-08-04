import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMemoListComponent } from './display-memo-list.component';

describe('DisplayMemoListComponent', () => {
  let component: DisplayMemoListComponent;
  let fixture: ComponentFixture<DisplayMemoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMemoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMemoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
