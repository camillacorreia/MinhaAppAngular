import { Store } from './../../todo.store';
import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../todo.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html'
})
export class TasksIniciadasComponent implements OnInit {

  iniciadas$: Observable<any[]>

  constructor(private store: Store) { }

  ngOnInit() {
    this.iniciadas$ = this.store.getToDoList()
      .pipe(
        map(todolist => todolist.filter(task => task.iniciado && !task.finalizado))
      )
  }
}