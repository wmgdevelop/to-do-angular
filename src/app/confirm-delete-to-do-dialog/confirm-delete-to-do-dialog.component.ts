import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-confirm-delete-to-do-dialog',
  templateUrl: './confirm-delete-to-do-dialog.component.html',
  styleUrls: ['./confirm-delete-to-do-dialog.component.css']
})
export class ConfirmDeleteToDoDialogComponent {
  @Output() close = new EventEmitter<boolean>()
  @Output() confirm = new EventEmitter<boolean>()

  onClose(): void {
    this.close.emit()
  }

  onConfirm(): void {
    this.confirm.emit()
  }
}
