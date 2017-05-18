import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TaskService {
  tasks: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.tasks = database.list('tasks');
  }

  addTask(newTask: Task){
    this.tasks.push(newTask);
  }

  getTasks(){
    return this.tasks;
  }

}
