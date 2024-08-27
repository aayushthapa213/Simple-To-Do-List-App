import TodoList from "./TodoList";
import styles from "../css/todoitem.module.css";

export default function TodoItem({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <TodoList
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
