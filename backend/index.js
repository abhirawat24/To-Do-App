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

})

app.get("/todos", function (req, res) {
    
})

app.put("/completed", function (req, res) {
    
})