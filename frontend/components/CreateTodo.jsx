import{ useState } from "react";


export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return<div>
        
        <input style={{
            padding: "10px",
            margin: "10px",
        }} type="text" placeholder="Title" onChange={function(e){
            const value = e.target.value;
            setTitle(value);
        }} /><br />
        <input style={{
            padding: "10px",
            margin: "10px",
        }} type="text" placeholder="Description" onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value);
        }} /><br /> 
        <button style={{
            padding: "10px",
            margin: "10px",
        }} onClick={()=>{
            fetch("http://localhost:3000/todos", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                header: {
                    "Content-Type": "application/json"
                }
            })
              .then(async function(res) {
                const json = await res.json();
                alert("Todo created successfully");
              })
        }}> Add a todo</button> 
    </div>
}

