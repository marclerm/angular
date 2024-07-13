// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { of } from 'rxjs';
// import { catchError, map, switchMap } from 'rxjs/operators';
// import { TaskService } from '../services/task.service'; // Replace with your task service
// import * as TaskActions from '../actions/task.actions';

// @Injectable()
// export class TaskEffects {
//   loadTasks$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(TaskActions.loadTasks),
//       switchMap(() =>
//         this.taskService.getTasks().pipe(
//           map(tasks => TaskActions.loadTasksSuccess({ tasks })),
//           catchError(error => of(TaskActions.loadTasksFailure({ error })))
//         )
//       )
//     )
//   );

//   addTask$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(TaskActions.addTask),
//       switchMap(({ task }) =>
//         this.taskService.addTask(task).pipe(
//           map(newTask => TaskActions.addTaskSuccess({ task: newTask })),
//           catchError(error => of(TaskActions.addTaskFailure({ error })))
//         )
//       )
//     )
//   );

//   updateTask$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(TaskActions.updateTask),
//       switchMap(({ task }) =>
//         this.taskService.updateTask(task).pipe(
//           map(updatedTask => TaskActions.updateTaskSuccess({ task: updatedTask })),
//           catchError(error => of(TaskActions.updateTaskFailure({ error })))
//         )
//       )
//     )
//   );

//   deleteTask$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(TaskActions.deleteTask),
//       switchMap(({ taskId }) =>
//         this.taskService.deleteTask(taskId).pipe(
//           map(() => TaskActions.deleteTaskSuccess({ taskId })),
//           catchError(error => of(TaskActions.deleteTaskFailure({ error })))
//         )
//       )
//     )
//   );

//   constructor(private actions$: Actions, private taskService: TaskService) {}
// }


import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TaskService } from '../services/task.service';
import { loadTasks, loadTasksSuccess, addTask, updateTask, deleteTask, taskError } from '../actions/task.actions';

@Injectable()
export class TaskEffects {
  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTasks),
      mergeMap(() =>
        this.taskService.getTasks().pipe(
          map(tasks => loadTasksSuccess({ tasks })),
          catchError(error => of(taskError({ error })))
        )
      )
    )
  );

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTask),
      mergeMap(action =>
        this.taskService.addTask(action.task).pipe(
          map(() => ({ type: '[Task] Add Task Success' })),
          catchError(error => of(taskError({ error })))
        )
      )
    )
  );

  updateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTask),
      mergeMap(action =>
        this.taskService.updateTask(action.task).pipe(
          map(() => ({ type: '[Task] Update Task Success' })),
          catchError(error => of(taskError({ error })))
        )
      )
    )
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTask),
      mergeMap(action =>
        this.taskService.deleteTask(action.taskId).pipe(
          map(() => ({ type: '[Task] Delete Task Success' })),
          catchError(error => of(taskError({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private taskService: TaskService
  ) {}
}
