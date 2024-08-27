import styles from "../css/footer.module.css"

export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todos : {completedTodos}</span>
      <span>Total Todos : {totalTodos}</span>
    </div> 
  );
}
