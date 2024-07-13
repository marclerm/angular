const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const taskService = require('./tasks');
const userService = require('./users');
const auth = require('./auth');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const secretKey = 'your_secret_key'; // Replace with your actual secret key

// Register route
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (userService.getUserByMail(email)) {
    return res.status(400).send('Email already registered');
  }
  const user = await userService.addUser(name, email, password);
  res.status(201).json(user);
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = userService.getUserByMail(email);
  if (!user || !(await userService.validatePassword(password, user.password))) {
    return res.status(400).send('Invalid email or password');
  }
  const token = auth.generateToken(user);
  res.json({ token });
});

// Task routes
app.get('/tasks', auth.authenticateToken, (req, res) => {
  res.json(taskService.getTasks());
});

app.get('/tasks/:id', auth.authenticateToken, (req, res) => {
  const task = taskService.getTask(req.params.id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).send('Task not found');
  }
});

app.post('/tasks', auth.authenticateToken, (req, res) => {
  const task = { ...req.body, id: uuidv4() };
  taskService.addTask(task);
  res.status(201).json(task);
});

app.put('/tasks/:id', auth.authenticateToken, (req, res) => {
  const updatedTask = { ...req.body, id: req.params.id };
  const task = taskService.updateTask(updatedTask);
  if (task) {
    res.json(task);
  } else {
    res.status(404).send('Task not found');
  }
});

app.delete('/tasks/:id', auth.authenticateToken, (req, res) => {
  const success = taskService.deleteTask(req.params.id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).send('Task not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
