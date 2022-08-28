import { FormEvent, useEffect, useState } from "react";
import { Status, Todo, TodoDto } from "./interfaces/Todo";
import { createTodo, getAllTodos } from "./services/TodoService";
import TodoForm from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [formData, setFormData] = useState<TodoDto>({
    title: "",
    description: "",
    status: Status.Open,
  });

  const getAndSetTodos = async () => {
    const todos = await getAllTodos();
    setTodos(todos || []);
  };

  const formOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await createTodo(formData);
    await getAndSetTodos();
  };

  useEffect(() => {
    getAndSetTodos();
  }, []);

  return (
    <div className="App">
      <header className="rounded-md m-4 p-4 ring-4 ring-indigo-600 bg-indigo-600 text-white text-center">
        <span className="text-4xl font-extrabold">Todo App</span>
        <br />
        <span className="italic">
          a react frontend client study.{" "}
          <a
            className="text-xl underline decoration-white"
            href="https://github.com/lx0f"
          >
            @lx0f
          </a>
        </span>
      </header>
      <div className="grid grid-cols-3 m-4 gap-x-4">
        <TodoList todos={todos} getAndSetTodos={getAndSetTodos} />
        <TodoForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={formOnSubmit}
        />
      </div>
    </div>
  );
}
