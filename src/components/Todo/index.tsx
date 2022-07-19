import { EmptyTodo } from "../EmptyTodo";
import { TodoItem } from "../TodoItem";
import styles from "./styles.module.css";

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}
interface ITodoProps {
  todos: ITodo[];
}

export const Todo = ({ todos }: ITodoProps) => {
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
      {todos.length > 0 ? (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <EmptyTodo />
      )}
    </div>
  );
};
