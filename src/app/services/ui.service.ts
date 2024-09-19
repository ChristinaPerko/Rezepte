import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';

 

@Injectable({

  providedIn: 'root'

})

export class UiService {

  private showAddTask: boolean = false;

  private subject: Subject<boolean> = new Subject<boolean>();

 

  constructor() {}

 

  toggleAddTask(): void {

    this.showAddTask = !this.showAddTask;

    this.subject.next(this.showAddTask);

  }

 

  onToggle(): Observable<boolean> {

    return this.subject.asObservable();

  }

}