import { Component, Input, OnInit } from '@angular/core';

import { TaskService } from '../task.service';

import { Task } from '../task';

 

@Component({

  selector: 'app-tasks',

  templateUrl: './tasks.component.html',

  styleUrls: ['./tasks.component.css']

})

export class TasksComponent implements OnInit {

  @Input() tasks: Task[] = []; // Eingabe-Deklaration

 

  constructor(private taskService: TaskService) {}

 

  ngOnInit(): void {

    // Diese Methode wird aufgerufen, wenn die Komponente initialisiert wird

    // Hier werden die Aufgaben geladen und der tasks-Array aktualisiert

    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));

  }

 

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      console.log('Task deleted:', task);
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });

  }

  addTask(task: Task) {

    this.taskService

      .addTaskService(task)

      .subscribe(

        (task) => (this.tasks.push(task) )

      );

  }
  onToggleReminder(task: Task): void {

    task.reminder = !task.reminder;

    this.taskService.updateTaskReminder(task).subscribe();

  }

}