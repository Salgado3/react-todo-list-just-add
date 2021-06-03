// component for todo list (pretty much allows us to see the items on our todo list and render)
const Todo = ({ todo }) => {
  return (
    <div>
      <h2>{todo.item}</h2>
    </div>
  );
};

// allows us to export module
export default Todo;
