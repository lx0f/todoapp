import { useState } from "react";
import { Status, Todo } from "../interfaces/Todo";
import TodoModal from "./TodoModal";

export default function TodoItem(props: {
  todo: Todo;
  updateAndSetTodo: (id: number, data: Todo) => Promise<void>;
  deleteOnClick: (id: number) => Promise<void>;
  getAndSetTodos: () => Promise<void>;
}) {
  const { todo, updateAndSetTodo, deleteOnClick, getAndSetTodos } = props;

  const [showModal, setShowModal] = useState(false);

  const statusColor =
    todo.status === Status.Open
      ? "bg-white ring-slate-200 hover:ring-indigo-600"
      : "bg-indigo-600 ring-indigo-600 hover:bg-white";

  return (
    <li key={todo.id} className="TodoItem p-2">
      <TodoModal
        todo={todo}
        showModal={showModal}
        setShowModal={setShowModal}
        getAndSetTodos={getAndSetTodos}
      />
      <div className="flex justify-between hover:bg-slate-50 transition ease-in-out duration-100">
        <div className="flex">
          <div
            className={`h-5 w-5 mt-0.5 mr-3 ring-2 rounded-full hover:cursor-pointer transition duration-100 ${statusColor}`}
            onClick={() => updateAndSetTodo(todo.id, todo)}
          ></div>
          <div onClick={() => setShowModal(true)}>
            <div className="font-medium">{todo.title}</div>
            <div className="text-slate-400 truncate">{todo.description}</div>
          </div>
        </div>
        <div>
          <button onClick={() => deleteOnClick(todo.id)} className="mb-auto">
            x
          </button>
        </div>
      </div>
    </li>
  );
}
