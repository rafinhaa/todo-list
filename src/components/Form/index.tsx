import { PlusCircle } from "phosphor-react";

import styles from "./styles.module.css";

export const Form = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button className={styles.buttonSubmit} type="submit">
          Criar <PlusCircle size={16} weight="bold" />
        </button>
      </form>
    </div>
  );
};
