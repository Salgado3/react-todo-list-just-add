//importing our components from our components folder

import { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import AddTodo from "./components/AddTodo";

function App() {
  //setting up the state of our App component. Id will be used to render new todos, item is what will be displayed in dom
  const [todos, setTodos] = useState([
    {
      id: 1,
      item: "Drink Water",
    },
    {
      id: 2,
      item: "Make Healthy Dinner",
    },
    {
      id: 3,
      item: "Exercise",
    },
  ]);

  //function that will allow us to add a random id number and set a todo list item
  const addTodo = (todo) => {
    const id = Math.ceil(Math.random() * 100000);
    const newTodo = { id, ...todo };
    setTodos([...todos, newTodo]);
  };

  //explains what we want returned after user input
  return (
    <div className="container">
      <Header title="Todo List" />
      <AddTodo onAdd={addTodo} />
      <List todos={todos} />
    </div>
  );
}

//allows us to export App.js (going to index.js)
export default App;
