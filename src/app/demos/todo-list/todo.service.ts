import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';
import { Store } from './todo.store';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
    private http: HttpClient,
    private store: Store
  ) { }

  getToDoList$: Observable<Task[]> = this.http
    .get<Task[]>('http://localhost:3000/todolist')
    .pipe(
      tap(next => this.store.set('todolist', next)));
  
  toggle(event: any) {
    this.http
      .put(`http://localhost:3000/todolist/${event.task.id}`, event.task)
      .subscribe(() => {
        const value = this.store.value.todolist;
        
        const todolist = value.map((task: Task) => {
          if (event.task.id === task.id) {
            return { ...task, ...event.task}
          } else {
            return task;
          }
        });

        this.store.set('todolist', todolist);
      });
  }
}