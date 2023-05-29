import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-edit-to-do-dialog',
  templateUrl: './edit-to-do-dialog.component.html',
  styleUrls: ['./edit-to-do-dialog.component.css']
})
export class EditToDoDialogComponent {
  @Output() close = new EventEmitter<boolean>()
  @Output() confirm = new EventEmitter<string>()
  descriptionTextField = ''

  onClose(): void {
    this.close.emit()
  }

  onConfirm(): void {
    this.confirm.emit(this.descriptionTextField)
  }
}
