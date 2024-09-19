import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Import des AppRoutingModule
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Importiere das FontAwesomeModule
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { AddTaskComponent } from './add-task/add-task.component'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AboutComponent,
    FooterComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule ,
    AppRoutingModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


