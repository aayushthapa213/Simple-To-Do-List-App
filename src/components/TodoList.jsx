import styles from "../css/todolist.module.css";
export default function TodoList({ item, todos, setTodos }) {
  function handeldelete(item) {
    setTodos(todos.filter((todo) => todo.name !== item.name));
  }
  function handleclick(name) {
    const newArray = todos.map((todo) =>
      todo.name == name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }

  const cName = item.done? styles.completed : "";
  return (
    <>
      <div className={styles.item}>
        <div className={styles.itemName}>
          <span className={cName} onClick={() => handleclick(item.name)}>{item.name} </span>
          <span>
            <button
              onClick={() => handeldelete(item)}
              className={styles.delete}
            >
              x
            </button>
          </span>
        </div>
        <hr className={styles.line} />
      </div>
    </>
  );
}
