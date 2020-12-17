const router = require('express').Router();


// require controllers
const indexController = require('../controllers/index')
const todoController = require('../controllers/todo');  

// index route
router.get('/', indexController.getIndex);


//******* TODO ROUTES **********

// Post request Endpoint for Creating a new  todo
router.post('/create', todoController.createNewTodo);

// POst request Endpoint for Updating a Todo Item
router.post('/update/:id', todoController.updateTodo);

// Delete request Endpoint for Deleting a Todo Item
router.delete('/delete/:id', todoController.deleteTodo);

module.exports = router;