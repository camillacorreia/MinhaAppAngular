import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
    private http: HttpClient
  ) { }

  getToDoList$: Observable<Task[]> = this.http
    .get<Task[]>('http://localhost:3000/todolist');
}