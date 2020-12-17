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
        res.json({
            message: "ToDo Item Created Successfully",
            data: todoItem,
            status: true
        })
    })
    .catch((error) => {
        res.json({
            message: `Unable to create Todo Item: ${error}`,
            status: false
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
            res.json({
                message: "ToDo Item Updated Succesfully",
                data: newTodo,
                status: true
            })
        })
        .catch((error) => {
            res.json({
                message: `Unable to Update the ToDo Item ${error}`,
                status: false
            })
        })

    })
    .catch((error) => {
        res.json({
            message: `Cannot find the ToDo with the id:(${req.params.id}): Error:${error}`,
            status: false
        })
    })

};