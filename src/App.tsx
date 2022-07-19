import { useState } from "react";

import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Todo } from "./components/Todo";

import "./global.css";

export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAddTodo = (title: string) => {
    if (title.trim().length <= 0) return;

    const newTodo: ITodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const handleCompletedTodo = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;

      return todo;
    });
    setTodos(newTodos);
  };

  const handleDeleteTodo = (id: string) => {
    const todosWithoutDeleted = todos.filter((todo) => todo.id !== id);
    setTodos(todosWithoutDeleted);
  };

  return (
    <div>
      <Header />
      <Form handleAddTodo={handleAddTodo} />
      <Todo
        todos={todos}
        handleCompletedTodo={handleCompletedTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
