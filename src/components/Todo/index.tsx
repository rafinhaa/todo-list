import { ITodo } from "../../App";

import { EmptyTodo } from "../EmptyTodo";
import { TodoItem } from "../TodoItem";

import styles from "./styles.module.css";

interface ITodoProps {
  todos: ITodo[];
}

export const Todo = ({ todos }: ITodoProps) => {
  const allTodos = todos.length;
  const counterTodos = allTodos > 0 ? styles.counterTodos : styles.counterEmpty;

  const CreatedTodosCounter = () => (
    <p>
      Tarefas criadas<span className={counterTodos}>{allTodos}</span>
    </p>
  );

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.contentLeft}>
          <CreatedTodosCounter />
        </div>
        <div className={styles.contentRight}>
          <p>
            Concluídas<span className={styles.counterEmpty}>0</span>
          </p>
        </div>
      </header>
      {todos.length > 0 ? (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <EmptyTodo />
      )}
    </div>
  );
};
