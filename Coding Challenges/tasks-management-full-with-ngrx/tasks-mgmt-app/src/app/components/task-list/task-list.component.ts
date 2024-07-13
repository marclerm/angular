import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../../models/task.model';
import * as TaskActions from '../../actions/task.actions';
import { selectAllTasks } from '../../selectors/task.selectors';
import { TaskState } from '../../reducers/task.reducer';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;
  //loading$: Observable<boolean>;
  //error$: Observable<any>;

  constructor(private store: Store<TaskState>) {
    this.tasks$ = this.store.select(selectAllTasks);
    //this.loading$ = this.store.select(selectTaskLoading);
    //this.error$ = this.store.select(selectTaskError);
   }

  ngOnInit(): void {
    this.store.dispatch(TaskActions.loadTasks());

  }

  deleteTask(taskId: string): void {
    this.store.dispatch(TaskActions.deleteTask({ taskId }));
  }

  handleTaskSaved(task: Task): void {
    if (task.id) {
      this.store.dispatch(TaskActions.updateTask({ task }));
    } else {
      this.store.dispatch(TaskActions.addTask({ task }));
    }
  }
}
