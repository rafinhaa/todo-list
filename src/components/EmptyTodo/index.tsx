import styles from "./styles.module.css";

import clipboard from "../../assets/clipboard.svg";

export const EmptyTodo = () => {
  return (
    <div className={styles.container}>
      <img src={clipboard} />
      <p className={styles.title}>Você não tem tarefas cadastradas</p>
      <p className={styles.subtitle}>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
};
