const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// define a todo item schema: as to be represented in the DB
const todo = new Schema({
    todo_name: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    start_time: {
        type: Date,
        required: true
    },
    end_time: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    }
});

const Todo = mongoose.model('Todo', todo);

module.exports = Todo;