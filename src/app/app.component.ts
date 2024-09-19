import { Component } from '@angular/core';

import { Task } from './task'; // Passe den Pfad entsprechend an

import { tasks } from './mock-tasks'; // Passe den Pfad entsprechend an

 

@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent {

  title = 'task-tracker';
  tasks: Task[] = tasks; // Weise die Aufgabenliste zu

}

