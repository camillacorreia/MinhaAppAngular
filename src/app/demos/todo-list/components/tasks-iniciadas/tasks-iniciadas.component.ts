import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html'
})
export class TasksIniciadasComponent implements OnInit {

  iniciadas$: Observable<any[]>

  constructor(private taskService: TasksService) {}

  ngOnInit() {
    this.iniciadas$ = this.taskService.getToDoList$;
  }
}