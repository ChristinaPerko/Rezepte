import { Component, OnInit } from '@angular/core';

import { UiService } from '../services/ui.service';

import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  showAddTask: boolean = false;

  subscription: Subscription;

 

  constructor(private uiService: UiService) {

    this.subscription = this.uiService

    .onToggle()

    .subscribe((value) => (this.showAddTask = value));

  }

 

 

  toggleAddTask() {

    this.uiService.toggleAddTask();

  }

}