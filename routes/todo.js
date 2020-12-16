const router = require('express').Router();


// require controllers
const indexController = require('../controllers/index')
const todoController = require('../controllers/todo');  

// index route
router.get('/', indexController.getIndex);


//******* TODO ROUTES **********

// Post request Endpoint for Creating a new  todo
router.post('/create', todoController.createNewTodo);





module.exports = router;