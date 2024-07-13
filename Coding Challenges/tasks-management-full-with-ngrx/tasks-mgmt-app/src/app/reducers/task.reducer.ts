// import { createReducer, on } from '@ngrx/store';
// import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
// import { Task } from '../models/task.model';
// import * as TaskActions from '../actions/task.actions';

// export interface TaskState {
//   tasks: Task[];
//   loading: boolean;
//   error: any;
// }

// export const initialState: TaskState = {
//   tasks: [],
//   loading: false,
//   error: null
// };

// export const taskReducer = createReducer(
//   initialState,

//   // Load tasks
//   on(TaskActions.loadTasks, state => ({
//     ...state,
//     loading: true,
//     error: null
//   })),
//   on(TaskActions.loadTasksSuccess, (state, { tasks }) => ({ ...state, tasks, loading: false })),
//   on(TaskActions.loadTasksFailure, (state, { error }) => ({
//     ...state,
//     loading: false,
//     error
//   })),

//   // Add task
//   on(TaskActions.addTaskSuccess, (state, { task }) => ({ ...state, tasks: [...state.tasks, task] })),
//   on(TaskActions.addTaskFailure, (state, { error }) => ({
//     ...state,
//     error
//   })),

//   // Update task
//   on(TaskActions.updateTask, (state, { task }) => ({...state, tasks: state.tasks.map(t => (t.id === task.id ? task : t)) })),
//   on(TaskActions.updateTaskFailure, (state, { error }) => ({
//     ...state,
//     error
//   })),

//   // Delete task
//   on(TaskActions.deleteTaskSuccess, (state, { taskId }) => ({...state, tasks: state.tasks.filter(task => task.id !== taskId) })),
//   on(TaskActions.deleteTaskFailure, (state, { error }) => ({
//     ...state,
//     error
//   }))
// );


// export const selectTaskLoading = (state: TaskState) => state.loading;
// export const selectTaskError = (state: TaskState) => state.error;


import { createReducer, on } from '@ngrx/store';
import { Task } from '../models/task.model';
import { loadTasksSuccess, addTask, updateTask, deleteTask } from '../actions/task.actions';

export interface TaskState {
  tasks: Task[];
}

export const initialState: TaskState = {
  tasks: []
};

export const taskReducer = createReducer(
  initialState,
  on(loadTasksSuccess, (state, { tasks }) => ({ ...state, tasks })),
  on(addTask, (state, { task }) => ({ ...state, tasks: [...state.tasks, task] })),
  on(updateTask, (state, { task }) => ({
    ...state,
    tasks: state.tasks.map(t => (t.id === task.id ? task : t))
  })),
  on(deleteTask, (state, { taskId }) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== taskId)
  }))
);
