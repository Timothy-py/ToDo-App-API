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