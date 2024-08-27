import { useState } from "react";
import Form from "./Form";
import TodoItem from "./TodoItem";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <TodoItem todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />

      {/* {todos.map((item) => {
        return <TodoList key={item} item={item} />;
      })} */}
    </>
  );
}
