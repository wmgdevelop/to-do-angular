import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditToDoDialogComponent } from './edit-to-do-dialog.component';

describe('EditToDoDialogComponent', () => {
  let component: EditToDoDialogComponent;
  let fixture: ComponentFixture<EditToDoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditToDoDialogComponent]
    });
    fixture = TestBed.createComponent(EditToDoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
