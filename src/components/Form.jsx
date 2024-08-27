import { useState } from "react";
import styles from "../css/form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit} action="">
      <input
        className={styles.moderninput}
        type="text"
        onChange={(e) => {
          setTodo({ name: e.target.value, done: false });
        }}
        value={todo.name}
        placeholder="Enter a todo"
      />
      <button className={styles.modernButton} type="submit">
        Add
      </button>
    </form>
  );
}
