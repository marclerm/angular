let tasks = [];

module.exports = {
  getTasks: () => tasks,
  getTask: (id) => tasks.find(task => task.id === id),
  addTask: (task) => {
    tasks.push(task);
    return task;
  },
  updateTask: (updatedTask) => {
    const index = tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      tasks[index] = updatedTask;
      return updatedTask;
    }
    return null;
  },
  deleteTask: (id) => {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      tasks.splice(index, 1);
      return true;
    }
    return false;
  }
};
