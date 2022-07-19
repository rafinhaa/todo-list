import { useState } from "react";

import { PlusCircle } from "phosphor-react";

import styles from "./styles.module.css";

interface IFormProps {
  handleAddTodo: (title: string) => void;
}

export const Form = ({ handleAddTodo }: IFormProps) => {
  const [todoTitle, setTodoTitle] = useState("");

  const onSubmitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todoTitle);
    setTodoTitle("");
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmitTodo} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button className={styles.buttonSubmit} type="submit">
          Criar <PlusCircle size={16} weight="bold" />
        </button>
      </form>
    </div>
  );
};
