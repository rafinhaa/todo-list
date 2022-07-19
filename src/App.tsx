import { useState } from "react";

import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Todo } from "./components/Todo";

import "./global.css";

const allTodos = [
  {
    id: 1,
    title: "Tarefa 1",
    completed: false,
  },
  {
    id: 2,
    title: "Tarefa 2",
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = useState(allTodos);

  return (
    <div>
      <Header />
      <Form />
      <Todo todos={todos} />
    </div>
  );
}

export default App;
