import { Trash, Check } from "phosphor-react";
import styles from "./styles.module.css";

interface ITodo {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
}

export const TodoItem = ({ todo: { title, completed } }: ITodo) => {
  const isCompleted = completed
    ? styles.taskCompleted
    : styles.taskNotCompleted;

  const CheckBox = () => (
    <button className={styles.checkContainer}>
      {completed ? <Check size={16} weight="bold" /> : <div />}
    </button>
  );

  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <CheckBox />
        <p className={isCompleted}>{title}</p>
      </div>

      <button className={styles.trashButton}>
        <Trash size={16} />
      </button>
    </div>
  );
};
