import { ITodo } from "../../App";

import { EmptyTodo } from "../EmptyTodo";
import { TodoItem } from "../TodoItem";

import styles from "./styles.module.css";

interface ITodoProps {
  todos: ITodo[];
  handleCompletedTodo: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
}

export const Todo = ({
  todos,
  handleCompletedTodo,
  handleDeleteTodo,
}: ITodoProps) => {
  const allTodos = todos.length;
  const counterTodos = allTodos > 0 ? styles.counterTodos : styles.counterEmpty;
  const completedTodos = todos.filter((todo) => todo.completed).length;

  const CreatedTodosCounter = () => (
    <p>
      Tarefas criadas<span className={counterTodos}>{allTodos}</span>
    </p>
  );

  const AllTodosCounter = () => (
    <p>
      Concluídas
      <span className={counterTodos}>
        {allTodos > 0 ? `${completedTodos} de ${allTodos}` : `0`}
      </span>
    </p>
  );

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.contentLeft}>
          <CreatedTodosCounter />
        </div>
        <div className={styles.contentRight}>
          <AllTodosCounter />
        </div>
      </header>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleCompletedTodo={handleCompletedTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))
      ) : (
        <EmptyTodo />
      )}
    </div>
  );
};
