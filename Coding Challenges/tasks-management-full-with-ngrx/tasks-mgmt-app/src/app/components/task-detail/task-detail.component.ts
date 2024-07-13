import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  taskId: string | null = null;
  task: Task|null = null;

  constructor(private route: ActivatedRoute, private taskService: TaskService) {
    this.taskId = '';
  }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.loadTaskDetails();
  }

  loadTaskDetails(): void {
    if(this.taskId)
    {
      this.taskService.getTask(this.taskId).subscribe(
        (task: Task) => {
          this.task = task;
        },
        (error: any) => {
          console.error('Error loading task details', error);
        }
      );
    }
  }
}
