import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../models/task.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskState } from '../../reducers/task.reducer';
import { selectTaskById } from '../../selectors/task.selectors';
import { Store } from '@ngrx/store';
import { addTask, updateTask } from '../../actions/task.actions';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  @Input() task!: Task;
  @Output() saveTask = new EventEmitter<Task>();

  taskForm: FormGroup;
  taskId!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<TaskState>
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
      dueDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.taskId = params['id'];
      if (this.taskId) {
        this.store.select(selectTaskById(this.taskId)).subscribe(task => {
          if (task) {
            this.task = task;
            this.taskForm.patchValue(task);
          }
        });
      }
    });
  }


  onSubmit(): void {
    debugger
    if (this.taskForm.valid) {
      const task: Task = {
        ...this.task,
        ...this.taskForm.value,
        id: this.task ? this.task.id : undefined
      };

      if (this.taskId) {
        this.store.dispatch(updateTask({ task }));
      } else {
        this.store.dispatch(addTask({ task }));
      }

      this.router.navigate(['/dashboard']);
    }
  }
}
