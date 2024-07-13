// import { createAction, props } from '@ngrx/store';
// import { Task } from '../models/task.model';

// // Load Tasks
// export const loadTasks = createAction('[Task] Load Tasks');
// export const loadTasksSuccess = createAction('[Task] Load Tasks Success', props<{ tasks: Task[] }>());
// export const loadTasksFailure = createAction('[Task] Load Tasks Failure', props<{ error: any }>());

// // Add Task
// export const addTask = createAction('[Task] Add Task', props<{ task: Task }>());
// export const addTaskSuccess = createAction('[Task] Add Task Success', props<{ task: Task }>());
// export const addTaskFailure = createAction('[Task] Add Task Failure', props<{ error: any }>());

// // Update Task
// export const updateTask = createAction('[Task] Update Task', props<{ task: Task }>());
// export const updateTaskSuccess = createAction('[Task] Update Task Success', props<{ task: Task }>());
// export const updateTaskFailure = createAction('[Task] Update Task Failure', props<{ error: any }>());

// // Delete Task
// export const deleteTask = createAction('[Task] Delete Task', props<{ taskId: string }>());
// export const deleteTaskSuccess = createAction('[Task] Delete Task Success', props<{ taskId: string }>());
// export const deleteTaskFailure = createAction('[Task] Delete Task Failure', props<{ error: any }>());


import { createAction, props } from '@ngrx/store';
import { Task } from '../models/task.model';

// Load Tasks
export const loadTasks = createAction('[Task] Load Tasks');
export const loadTasksSuccess = createAction('[Task] Load Tasks Success', props<{ tasks: Task[] }>());

// Add Task
export const addTask = createAction('[Task] Add Task', props<{ task: Task }>());

// Update Task
export const updateTask = createAction('[Task] Update Task', props<{ task: Task }>());

// Delete Task
export const deleteTask = createAction('[Task] Delete Task', props<{ taskId: string }>());

// Error Handling (optional)
export const taskError = createAction('[Task] Error', props<{ error: any }>());
