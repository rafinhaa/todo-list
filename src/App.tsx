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

  return (
    <div>
      <Header />
      <Form handleAddTodo={handleAddTodo} />
      <Todo todos={todos} />
    </div>
  );
}

export default App;
