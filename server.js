// require app dependencies
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// setup express server
const app = express();
const port = process.env.PORT || 7000;

app.use(express.json());

// require app routes
const todoapi = require('./routes/todo')

// setup database: connecting to mongodb atlas
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('MongoDB Database connection established successfully :)');
})

// specify root url path for app
app.use('/todo/api', todoapi)


// configure app PORT
app.listen(port, ()=>{
    console.log(`Server is running on PORT: ${port}`);
})

module.exports = app;

