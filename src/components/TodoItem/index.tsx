import { ITodo } from "../../App";

import { Trash, Check } from "phosphor-react";

import styles from "./styles.module.css";

interface ITodoItemProps {
  todo: ITodo;
  handleCompletedTodo: (id: string) => void;
}

export const TodoItem = ({
  todo: { id, title, completed },
  handleCompletedTodo,
}: ITodoItemProps) => {
  const isCompleted = completed
    ? styles.taskCompleted
    : styles.taskNotCompleted;

  const handleCompleted = () => {
    handleCompletedTodo(id);
  };

  const CheckBox = () => (
    <button onClick={handleCompleted} className={styles.checkContainer}>
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
