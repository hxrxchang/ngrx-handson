import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMemoFormComponent } from './add-memo-form.component';

describe('AddMemoFormComponent', () => {
  let component: AddMemoFormComponent;
  let fixture: ComponentFixture<AddMemoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMemoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMemoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
