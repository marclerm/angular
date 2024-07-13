// // import { createFeatureSelector, createSelector } from '@ngrx/store';
// // import { TaskState } from '../reducers/task.reducer';
// // import { Task } from '../models/task.model';
// // import * as fromReducer from '../reducers/task.reducer';

// // export const selectTaskState = createFeatureSelector<TaskState>('tasks');

// // export const selectAllTasks = createSelector(
// //   selectTaskState,
// //   (state: TaskState) => state.tasks
// // );

// // export const selectTaskById = (taskId: string) => createSelector(
// //   selectAllTasks,
// //   (tasks: Task[]) => tasks.find(task => task.id === taskId)
// // );

// // export const selectPendingTasks = createSelector(
// //   selectAllTasks,
// //   (tasks: Task[]) => tasks.filter(task => task.status === 'pending')
// // );

// // export const selectCompletedTasks = createSelector(
// //   selectAllTasks,
// //   (tasks: Task[]) => tasks.filter(task => task.status === 'completed')
// // );


// // export const selectTaskError = createSelector(
// //   selectTaskState,
// //   fromReducer.selectTaskError
// // );

// // export const selectTaskLoading = createSelector(
// //   selectTaskState,
// //   fromReducer.selectTaskLoading
// // );

// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { TaskState } from '../reducers/task.reducer';

// export const selectTaskState = createFeatureSelector<TaskState>('tasks');

// export const selectAllTasks = createSelector(
//   selectTaskState,
//   (state: TaskState) => state.tasks
// );

// export const selectTaskById = (taskId: string) => createSelector(
//   selectAllTasks,
//   (tasks) => tasks.find(task => task.id === taskId)
// );

// export const selectPendingTasks = createSelector(
//   selectAllTasks,
//   (tasks) => tasks.filter(task => task.status === 'pending')
// );

// export const selectCompletedTasks = createSelector(
//   selectAllTasks,
//   (tasks) => tasks.filter(task => task.status === 'completed')
// );


import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from '../reducers/task.reducer';

export const selectTaskState = createFeatureSelector<TaskState>('tasks');

export const selectAllTasks = createSelector(
  selectTaskState,
  (state: TaskState) => state.tasks
);

export const selectTaskById = (taskId: string) => createSelector(
  selectAllTasks,
  (tasks) => tasks.find(task => task.id === taskId)
);

export const selectPendingTasks = createSelector(
  selectAllTasks,
  (tasks) => tasks.filter(task => task.status === 'pending')
);

export const selectCompletedTasks = createSelector(
  selectAllTasks,
  (tasks) => tasks.filter(task => task.status === 'completed')
);
