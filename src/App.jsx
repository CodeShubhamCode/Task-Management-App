import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";
import FinishedMessage from "./components/FinishedMessage";
import "./App.css";
import TodoItemsContextProvider, { TodoItemsContext } from "./store/todo-tems-store";

function App() {
  
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddToDo />
        <FinishedMessage></FinishedMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
