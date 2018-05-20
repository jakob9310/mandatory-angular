import { Component } from '@angular/core';
import {TaskService} from "../task.service";

@Component({
  selector: 'task-form',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent {

  onSubmit(f){
    this.taskService.addTask("test", "test")



  }

  constructor(private taskService: TaskService) {}

}
