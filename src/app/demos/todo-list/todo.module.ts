import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TasksService } from './todo.service';
import { TodoComponent } from './todo.component';
import { TasksFinalizadasComponent } from './components/tasks-finalizadas/tasks-finalizadas.component';
import { ToDoListComponent } from './components/todo-list/todo-list.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksIniciadasComponent } from './components/tasks-iniciadas/tasks-iniciadas.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    TasksService
  ],
  declarations: [
    TodoComponent,
    TasksFinalizadasComponent,
    TasksIniciadasComponent,
    ToDoListComponent,
    TasksComponent
  ],
  exports: [
    TodoComponent,
    TasksFinalizadasComponent,
    TasksIniciadasComponent,
    TasksComponent,
    ToDoListComponent
  ]
})
export class TodoModule { }