const express = require('express');
const app = express();
const { ROLE, users } = require('./data');
const { authUser, authRole } = require('./basicAuth');
const projectRouter = require('./routes/projects');
const { errorHandler } = require('./middleware/errorHandler');

app.use(express.json());
app.use(setUser);
app.use('/projects', projectRouter);

// Home page route
app.get('/', (req, res) => {
  res.send('Home Page');
});

// Dashboard page route
app.get('/dashboard', authUser, (req, res) => {
  res.send('Dashboard Page');
});

// Admin page route
app.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res) => {
  res.send('Admin Page');
});

// Error handling middleware
app.use(errorHandler);

function setUser(req, res, next) {
  const userId = req.body.userId;
  if (userId) {
    req.user = users.find((user) => user.id === userId);
  }
  next();
}

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

/*
const express = require('express')
const app = express()
const { ROLE, users } = require('./data')
const { authUser, authRole} = require('./basicAuth')
const projectRouter = require('./routes/projects')

app.use(express.json())
app.use(setUser)
app.use('/projects', projectRouter)

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/dashboard', authUser, (req, res) => {
  res.send('Dashboard Page')
})

app.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res) => {
  res.send('Admin Page')
})

function setUser(req, res, next) {
  const userId = req.body.userId
  if (userId) {
    req.user = users.find(user => user.id === userId)
  }
  next()
}

app.listen(3000)*/