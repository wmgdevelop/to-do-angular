import { Injectable } from '@angular/core';
import { ToDo } from './to-do'

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  constructor() {}

  addTodo(toDoList: ToDo[], toDo: ToDo) {
    const id = toDoList.length + 1;
    const newToDo = { ...toDo, id };
    toDoList.push(newToDo);
  }
}
