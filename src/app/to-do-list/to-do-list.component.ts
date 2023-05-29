import { Component } from '@angular/core'
import { TO_DO_LIST } from './to-do-list'
import { ToDoService } from '../to-do.service'
import { ToDo } from '../to-do'

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  providers: [ToDoService]
})
export class ToDoListComponent {
  toDoList = TO_DO_LIST
  descriptionTextField = ''
  isEditToDoDialogOpen = false
  isConfirmDeleteToDoDialogOpen = false
  currentToDo!: ToDo

  constructor(private toDoService: ToDoService) { }

  addToDo() {
    if (!this.descriptionTextField) {
      return
    }
    const toDo: ToDo = {
      description: this.descriptionTextField,
      done: false
    }
    this.toDoService.addTodo(
      this.toDoList,
      toDo
    )
  }

  editToDo(toDo: ToDo) {
    this.currentToDo = toDo
    this.isEditToDoDialogOpen = true
  }

  cancelEditTodo() {
    this.isEditToDoDialogOpen = false
  }

  confirmEditToDo(descriptionTextField: string) {
    const toDoIndex = this.toDoList.findIndex((toDo) => {
      return toDo.id === this.currentToDo.id
    })
    this.toDoList[toDoIndex].description = descriptionTextField
    this.isEditToDoDialogOpen = false
  }

  deleteToDo(toDo: ToDo) {
    this.currentToDo = toDo
    this.isConfirmDeleteToDoDialogOpen = true
  }

  cancelDeleteTodo() {
    this.isConfirmDeleteToDoDialogOpen = false
  }

  confirmDeleteToDo() {
    const toDoIndex = this.toDoList.findIndex((toDo) => {
      return toDo.id === this.currentToDo.id
    })
    this.toDoList.splice(toDoIndex, 1)
    this.isConfirmDeleteToDoDialogOpen = false
  }

  calculateProgressPercentage() {
    const totalDone = this.toDoList.filter((toDo) => toDo.done)
    return totalDone.length / this.toDoList.length * 100
  }

  getProgressBarText() {
    const totalDone = this.toDoList.filter((toDo) => toDo.done)
    return `${totalDone.length} of ${this.toDoList.length} done`
  }

  removeAllChecked() {
    this.toDoList = this.toDoList.reduce((newToDoList, toDo) => {
      if (!toDo.done) {
        newToDoList.push(toDo)
      }
      return newToDoList
    }, [] as ToDo[])
  }
}
