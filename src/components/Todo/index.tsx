import { EmptyTodo } from "../EmptyTodo";
import styles from "./styles.module.css";

export const Todo = () => {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.contentLeft}>
          <p>
            Tarefas criadas<span>0</span>
          </p>
        </div>
        <div className={styles.contentRight}>
          <p>
            Concluídas<span>0</span>
          </p>
        </div>
      </header>
      <EmptyTodo />
    </div>
  );
};
