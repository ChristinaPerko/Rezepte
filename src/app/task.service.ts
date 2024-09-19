import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Task } from './task';

 

@Injectable({

  providedIn: 'root'

})

export class TaskService {

  private apiBaseUrl = 'http://localhost:5000/tasks';

 

  constructor(private http: HttpClient) {}
  

 

  deleteTask(task: Task): Observable<Task> {

    const url = `${this.apiBaseUrl}/${task.id}`;

    return this.http.delete<Task>(url);

  }

 

  getTasks(): Observable<Task[]> {

    return this.http.get<Task[]>(this.apiBaseUrl);

  }

  addTaskService(task:Task):Observable<Task>{

    return this.http.post<Task>(this.apiBaseUrl,task)

  }
  updateTaskReminder(task: Task): Observable<Task> {

    const url = `${this.apiBaseUrl}/${task.id}`;

    return this.http.put<Task>(url, task);

  }

}