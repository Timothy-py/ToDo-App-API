const Todo = require('../models/todo')


// Create a Todo
exports.createNewTodo = (req, res) => {
    
    // receive data from the request body and save individually into a variable
    const todo_name = req.body.todo_name;
    const status = req.body.status;
    const start_time = Date.parse(req.body.start_time);
    const end_time = Date.parse(req.body.end_time);
    const description = req.body.description;
    const priority = req.body.priority;

    // Create a new todo item
    const newTodo = new Todo({
        todo_name,
        status,
        start_time,
        end_time,
        description,
        priority
    })

    // Insert the todo item into the DB
    newTodo.save()
    .then((todoItem) => {
        res.status(200).json({
            message: "ToDo Item Created Successfully",
            data: todoItem
        })
    })
    .catch((error) => {
        res.status(400).json({
            message: `Unable to create Todo Item: ${error}`,
        })
    })

}


// Update a Todo Item
exports.updateTodo = (req, res) => {

    // find the todo item through the id passed in the url
    Todo.findById(req.params.id)
    .then((todoItem) => {
        todoItem.todo_name = req.body.todo_name;
        todoItem.status = req.body.status;
        todoItem.start_time = req.body.start_time;
        todoItem.end_time = req.body.end_time;
        todoItem.description = req.body.description,
        todoItem.priority = req.body.priority

        // now save the new todo item: update
        todoItem.save()
        .then((newTodo) => {
            res.status(200).json({
                message: "ToDo Item Updated Succesfully",
                data: newTodo
            })
        })
        .catch((error) => {
            res.status(400).json({
                message: `Unable to Update the ToDo Item ${error}`
            })
        })

    })
    .catch((error) => {
        res.status(400).json({
            message: `Cannot find the ToDo with the id:(${req.params.id}): Error:${error}`,
            status: false
        })
    })

};

// Delete a Todo Item
exports.deleteTodo = (req, res) => {

    Todo.findByIdAndDelete(req.params.id)
    .then(() => {
        res.status(200).json({
            message: "Todo Item Deleted Successfully"
        })
    })
    .catch((error) => {
        res.status(400).json({
            message: `Unable to delete todo item. Error: ${error}`
        })
    })

};

// Get all Todo Items
exports.getAllTodo = (req, res) => {

    Todo.find()
    .then((todos) => {

        let filter_todo = []
        // for each of the todo items retrieved from the db, 
        // get out just the todo_name and priority,
        // save them in a new un-named object,
        // push the data object to filter_todo array
        todos.forEach((todo) => {{
            filter_todo.push({
                "_id": todo._id,
                "todo_name": todo.todo_name,
                "priority": todo.priority
            })
        }})

        // response
        res.status(200).json({
            message: "All Todo Items Retrieved Successfully",
            data: filter_todo
        })
    })
    .catch((error) => {
        res.status(400).json({
            message: `Unable to retrieve all todo items ${error}`
        })
    })

};

// Get todo item details
exports.todoDetail = (req, res) => {

    Todo.findById(req.params.id)
    .then((todoItem) => {
        res.status(200).json({
            message: "ToDo Item Details Retrieved Successfully",
            data: todoItem
        })
    })
    .catch((error) => {
        res.status(400).json({
            message: `Unable to retrieve Todo Item Details. Error: ${error}`
        })
    })
    
};