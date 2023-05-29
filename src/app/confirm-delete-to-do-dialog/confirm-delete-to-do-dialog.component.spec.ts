import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteToDoDialogComponent } from './confirm-delete-to-do-dialog.component';

describe('ConfirmDeleteToDoDialogComponent', () => {
  let component: ConfirmDeleteToDoDialogComponent;
  let fixture: ComponentFixture<ConfirmDeleteToDoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmDeleteToDoDialogComponent]
    });
    fixture = TestBed.createComponent(ConfirmDeleteToDoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
