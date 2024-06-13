import styles from "./FinishedMessage.module.css";
import { TodoItemsContext } from "../store/todo-tems-store";
import { useContext } from "react";


const FinishedMessage = () => {
  const contextObject = useContext(TodoItemsContext);
  const todoItems = contextObject.todoItems;
  return (
    todoItems.length === 0 && <p className={styles.para}>Enjoy Your Day</p>
  );
};

export default FinishedMessage;
