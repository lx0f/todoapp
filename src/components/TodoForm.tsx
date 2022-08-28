import { FormEvent, SetStateAction } from "react";
import { TodoDto } from "../interfaces/Todo";

export default function TodoForm(props: {
  formData: TodoDto;
  setFormData: React.Dispatch<SetStateAction<TodoDto>>;
  onSubmit: (e: FormEvent) => void;
}) {
  const { formData, setFormData, onSubmit } = props;

  const handleClear = () => {
    setFormData({
      ...formData,
      title: "",
      description: "",
    });
  };
  return (
    <div className="container mb-auto border rounded-xl px-4 pt-4 shadow-lg">
      <header className="text-2xl mb-2 font-semibold underline decoration-2 decoration-indigo-600">
        Add Todo
      </header>
      <form className="container space-y-2 pb-4" onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Todo title here"
          className="focus:outline-none w-full font-medium text-lg"
          value={formData.title}
          onChange={(e) => {
            setFormData({ ...formData, title: e.target.value });
          }}
          required
        />
        <textarea
          className="w-full text-sm focus:outline-none"
          rows={5}
          name="description"
          placeholder="Description"
          value={formData.description || ""}
          onChange={(e) => {
            setFormData({ ...formData, description: e.target.value });
          }}
        ></textarea>
        <div className="flex justify-end space-x-4">
          <button
            className="border text-slate-500 rounded-xl px-5 py-1"
            onClick={(e) => {
              e.preventDefault();
              handleClear();
            }}
          >
            Clear
          </button>
          <button
            className="bg-indigo-600 text-white rounded-xl px-5 py-1"
            type="submit"
          >
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
}
