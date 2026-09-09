import{ useState } from "react";


export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return<div>
        
        <input style={{
            padding: "10px",
            margin: "10px",
        }} type="text" placeholder="Title" /><br />
        <input style={{
            padding: "10px",
            margin: "10px",
        }} type="text" placeholder="Description" /><br /> 
        <button style={{
            padding: "10px",
            margin: "10px",
        }} onClick={()=>{
            fetch("http://localhost:3000/todos", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                })
            })
        }}> Add a todo</button> 
    </div>
}

