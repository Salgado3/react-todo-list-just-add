//importing useState obj(?) from React library
import { useState } from "react";
//setting up logic to add todo item from user input
const AddTodo = ({ onAdd }) => {
  const [item, setItem] = useState("");
  //smurf (event listener)
  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({ item });

    setItem("");
  };
  //our output of the user input. Setting up the type and value.
  return (
    <form onSubmit={onSubmit}>
      <label>Add Todo:</label>
      <input
        type="text"
        placeholder="Todo Item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      {/* //tells what time of data to expect */}
      <input type="submit" value="Add Todo" />
    </form>
  );
};
//exporting
export default AddTodo;
