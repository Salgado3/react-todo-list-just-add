// component for list (allows us to generate a list for our todos, or for anything else for that matter)

// lets us use the todos components from todo.js
import Todo from "./Todo";

// allows us to generate the todos based on id
const List = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

//exporting list.js
export default List;
