import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Task } from '../task';

import { UiService } from '../services/ui.service';

import { Subscription } from 'rxjs';

 

@Component({

  selector: 'app-add-task',

  templateUrl: './add-task.component.html',

  styleUrls: ['./add-task.component.css']

})

export class AddTaskComponent implements OnInit {

  showAddTask: boolean = false;

  subscription: Subscription;

 

  constructor(private uiService: UiService) {

    this.subscription = this.uiService.onToggle().subscribe((value) => {

      this.showAddTask = value;

    });

  }

 

  ngOnInit(): void {}

 

  showAddForm: boolean = false;

  text!: string;

  day!: string;

  reminder!: boolean;

 

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>();

 

  onSubmit() {

    if (!this.text) {

      alert('Please add a task');

      return;

    }

 

    const newTask: Task = {

      id: 0, // Set the ID accordingly

      text: this.text,

      day: this.day,

      reminder: this.reminder

    };

 

    this.onAddTask.emit(newTask);

  }

}