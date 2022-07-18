import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Todo } from "./components/Todo";

import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <Form />
      <Todo />
    </div>
  );
}

export default App;
