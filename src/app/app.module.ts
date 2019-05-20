import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {TodoCard} from './todo/TodoCard';
import { TodoList, TodoDone } from './todo/TodoData';
import {TodoComponent} from './todo/todo.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TodoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
