import { TodoCard } from '../todo/TodoCard'
import { TodoList, TodoDone } from '../todo/TodoData';
import {Component} from '@angular/core';

@Component({
selector: 'todo',
templateUrl: '../todo/todo.component.html'
})
export class TodoComponent {
  todoList = [];
  incrementid = '';
  incrementdoneid = '';
  graph: TodoCard = {
    id: 1,
    name: 'Your To Do List'
  };

  ngOnInit() {
  this.todoList = TodoList;
  this.todoDone = TodoDone;
  }

  addTodo(x) {
    if (this.todoList.length == 0) {
      this.todoList = [{ id: this.incrementid, name: x }]
    }
    else {
      this.incrementid = this.todoList[this.todoList.length - 1];
      this.incrementid = this.incrementid['id']+ 1;
      this.todoList.push({ id: this.incrementid, name: x });
    }
  }


  addDone(x) {
    if (this.todoDone.length == 0) {
      this.todoDone = [{ id: this.incrementid, name: x['name']}]
      for (var i = 0; i < this.todoList.length; i++) {
        if (this.todoList[i]["name"] == x["name"]) {
          this.todoList.splice(i, 1);
        }
      }
    }
    else {
      this.incrementdoneid = this.todoDone[this.todoDone.length - 1];
      this.incrementdoneid = this.incrementdoneid['id']+ 1;
      this.todoDone.push({ id: this.incrementdoneid, name: x['name'] });
      for (var i = 0; i < this.todoList.length; i++) {
        if (this.todoList[i]["name"] == x["name"]) {
          this.todoList.splice(i, 1);
        }
      }
    }
  }

  deleteDone() {
  this.todoDone = [];
  }
}
