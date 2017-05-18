import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  submitForm(name: string, role: string, status:boolean){
    var newTask: Task = new Task(name, role, status);
    this.taskService.addTask(newTask);
  }

}
