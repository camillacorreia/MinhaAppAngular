import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html'
})
export class TasksFinalizadasComponent implements OnInit {

  finalizados$: Observable<any[]>

  constructor(private taskService: TasksService) {}

  ngOnInit() {
    this.finalizados$ = this.taskService.getToDoList$;
  }
}