import {useState} from 'react';
import "./App.css";
import { CreateTodo } from './components/CreateTodo';
import { Todos } from '../components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

   fetch("http://localhost:3000/todos")
   .then(async function(res) {
    const json = await res.json();
    setTodos(json);
   })
   


 return (
  <div>
    <CreateTodo></CreateTodo>
    <Todos todos={[
      {
        title: "Go to gym",
        description: "You need to go to the gym",
        completed: false
      },
      {
        title: "Go to school",
        description: "You need to go to the school",
        completed: true
      }
    ]}></Todos>
  </div>
 ) 
}

export default App;