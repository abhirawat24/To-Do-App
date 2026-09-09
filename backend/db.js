/*
Todo {
title: "string",
description: "string",
completed: "boolean"
}
*/

const mongoose = require('mongoose');
//mongodb url
// mongodb +srv://<username>:<password>@cluster0.4xj7g.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://kirags123::8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    descrption: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema);
module.exports = {todo}