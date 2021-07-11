import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '../../todo.store';
import { map } from 'rxjs/operators';
import { TasksService } from '../../todo.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit, OnDestroy {

  todolist$: Observable<any[]>
  subscription: Subscription;

  constructor(
    private store: Store,
    private taskService: TasksService
  ) {}

  ngOnInit() {
    this.todolist$ = this.store.getToDoList()
      .pipe(
        map(todolist => todolist.filter(task => !task.iniciado && !task.finalizado))
      );

    this.subscription = this.taskService.getToDoList$.subscribe();
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}