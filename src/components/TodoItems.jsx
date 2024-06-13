import style from "./TodoItems.module.css";
import ToDoitem from "./ToDoitem";
import { TodoItemsContext } from "../store/todo-tems-store";
import { useContext } from "react";

const TodoItems = () => {
  const contextObject = useContext(TodoItemsContext);
  const todoItems = contextObject.todoItems;
  const deleteItem = contextObject.deleteItem;


  return (
    <div className={style.itemsContainer}>
      {todoItems.map((items) => (
        <ToDoitem
          key={items.name}
          todoName={items.name}
          todoDate={items.dueDate}
        ></ToDoitem>
      ))}
    </div>
  );
};

export default TodoItems;
