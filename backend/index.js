//write basic express boilerplate code
//with express.json middleware


const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// body { 
//    title: "string",
//    description: "string",
//    completed: "boolean"
//}

app.post("/todo", async function (req,res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeparse(createPayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg:"Wrong inputs",
        })
        return;
    }
    //put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created successfully"
    })
})

app.get("/todos", async function (req, res) {
    const todos = await todo.find();
    res.json({
        todos: todos
    })
})

app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeparse(updatePayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg:"Wrong inputs",
        })
        return;
    }
    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
})
res.json({
    msg: "Todo updated successfully"
})
})

app.listen(3000, function () {
    console.log("Server started on port 3000")
})