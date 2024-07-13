import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../../models/task.model';
import { loadTasks } from '../../actions/task.actions';
import { TaskState } from '../../reducers/task.reducer';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { selectAllTasks } from '../../selectors/task.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tasks$: Observable<Task[]>;
  pendingTasks: Task[] = [];
  completedTasks: Task[] = [];

  constructor(
    private store: Store<TaskState>,
    private authService: AuthService,
    private router: Router
  ) {
    this.tasks$ = this.store.select(selectAllTasks);
   }

  ngOnInit(): void {
    this.store.dispatch(loadTasks());

    this.tasks$.subscribe(tasks => {
      this.pendingTasks = tasks.filter(task => task.status === 'pending');
      this.completedTasks = tasks.filter(task => task.status === 'completed');
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
