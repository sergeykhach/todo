
import {useState} from "react";
import './App.css';
import TodoFooter from "./TodoFooter";
import TodoForm from "./TodoForm";
import TodoList from './TodoList';

function App() {

const [todos, setTodos] = useState([
  {
    id: Math.random(),
    text: "Aravot zartnel",
    isCompleted: false
  },
  {
    id: Math.random(),
    text: "FB bacel",
    isCompleted: false
  },
  {
    id: Math.random(),
    text: "Zadanin stanal u arag anel",
    isCompleted: false
  }
]);

  return (
    <div className="App">
      <TodoForm onAdd={(text) => {
        setTodos([
          ...todos,
          {
            id: Math.random(),
            text: text,
            isCompleted: false
          }
        ]);
      }}/>
      <TodoList
       todos={todos}
       onDelete={(todo) => {
        setTodos(todos.filter((t) => t.id !== todo.id));
       }}
       onChange={(newTodo) => {
        setTodos(todos.map((todo) => {
          if(todo.id === newTodo.id){
            return newTodo;
          } 
          return todo;
        }));
       }}
       />
      <TodoFooter todos={todos} onClearCompleted ={
        () => {
          setTodos(todos.filter((todo) => !todo.isCompleted));
        }
      }/>
    </div>
  );
}

export default App;
