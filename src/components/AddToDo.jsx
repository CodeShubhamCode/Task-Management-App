import { useState, useRef } from "react";
import style from "./AddToDo.module.css";
import { IoMdAddCircle } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-tems-store";
import { useContext } from "react";

function AddToDo() {
  const { addNewItem } = useContext(TodoItemsContext);

  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    // console.log(event);
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };
  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            // value={todoName}
            ref={todoNameElement}
            type="text"
            placeholder="Enter Todo Here"
            className={style.Input}
          />
        </div>

        <div className="col-4">
          <input
            // value={dueDate}
            ref={dueDateElement}
            type="date"
            className={style.Input}
          />
        </div>
        <div className="col-2">
          <button
            // type="button"
            type="submit"
            className="btn btn-success kg-button"
            // onClick={handleAddButtonClicked}
          >
            <IoMdAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;
