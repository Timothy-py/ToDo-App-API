const router = require('express').Router();


// require controllers
const indexController = require('../controllers/index')
const todoController = require('../controllers/todo');  

// index route
router.get('/', indexController.getIndex);


//******* TODO ROUTES **********

// POST request Endpoint for Creating a new  todo
router.post('/create', todoController.createNewTodo);

// POST request Endpoint for Updating a Todo Item
router.post('/update/:id', todoController.updateTodo);

// DELETE request Endpoint for Deleting a Todo Item
router.delete('/delete/:id', todoController.deleteTodo);

// GET request Endpoint for getting all todo items
router.get('/todos', todoController.getAllTodo);

// GET request Endpoint for retrieving the detail of a todo item
router.get('/todo/:id', todoController.todoDetail);

// POST request Endpoinf for searching through the db for a todo item
// with a specified todo_name and priority
router.post('/search', todoController.todoSearch);

module.exports = router;