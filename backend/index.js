//write basic express boilerplate code
//with express.json middleware


const express = require('express');
const app = express();

app.use(express.json());

// body { 
//    title: "string",
//    description: "string",
//    completed: "boolean"
//}

app.post("/todo", function (req,res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeparse(createPayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg:"Wrong inputs",
        })
        return;
    }
    //put it in mongodb

})

app.get("/todos", function (req, res) {
    
})

app.put("/completed", function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeparse(updatePayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg:"Wrong inputs",
        })
        return;
    }
    
})