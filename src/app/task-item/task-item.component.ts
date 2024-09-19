import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { Task } from '../task';

import { TaskService } from '../task.service';

 

@Component({

  selector: 'app-task-item',

  templateUrl: './task-item.component.html',

  styleUrls: ['./task-item.component.css']

})

export class TaskItemComponent implements OnInit {

  // Deklaration der Eigenschaften

  tasks: Task[] = [];

  @Input() task!: Task; // Eingabe: Die aktuelle Aufgabe

  faTrash = faTrash; // Das Font Awesome Trash-Icon

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>(); // Ausgabe-Event für das Löschen

  @Output() toggleReminder: EventEmitter<Task> = new EventEmitter<Task>(); // Ausgabe-Event für das Umschalten der Erinnerung

 

  constructor(private taskService: TaskService, private library: FaIconLibrary) {

    library.addIcons(faTrash); // Fügt das Trash-Icon zur Font Awesome-Bibliothek hinzu

  }

 

  ngOnInit(): void {

    // Bei Initialisierung werden Aufgaben geladen und in der tasks-Liste gespeichert

    this.taskService.getTasks().subscribe((tasks: Task[]) => {

      this.tasks = tasks;

    });

  }

 

  onDelete(task: Task) {

    // Die onDelete-Methode wird aufgerufen, wenn der Delete-Button geklickt wird

    this.onDeleteTask.emit(task); // Löst das onDeleteTask-Ereignis aus und übergibt die Aufgabe

  }

  onToggleReminder(task: Task): void {

    this.toggleReminder.emit(task);

  }

}