import { useState } from 'react';
// const cors = require("cors");
// import reactLogo from './assets/react.svg';
// import viteLogo from './vite.svg'; // Update the path based on your project structure
import './App.css';
import { CreateToDo } from './Components/CreateToDo';
import { Todos } from './Components/ToDos';

// const app = express();
// app.use(express.json());
// app.use(cors());

function App() {
  const [todos, setTodos] = useState([]);
  fetch ("http://localhost:3000/todo") // Send the fetch request to the current set of todos once you get them get the json and then set todos as json.todos 
  .then(async function(res){
    // Response we get back
    const json = await res.json() ;
    setTodos(json.todos)
  })

  return (
    <>
      <div>
        <CreateToDo setTodos={setTodos}></CreateToDo>
        <Todos todos={todos}></Todos>
      </div>
    </>
  );
}

export default App;
