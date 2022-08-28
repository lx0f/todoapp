import axios from "axios";
import { Status, Todo, TodoDto } from "../interfaces/Todo";

export const getAllTodos = async (): Promise<Todo[]> => {
  const response = await axios.get("/Todo")
  const status = response.status;
  console.log("DEBUG:")
  console.log("    GET STATUS:", status);
  return response.data;
};

export const getTodo = async (id: number): Promise<Todo> => {
  const response = await axios.get(`/Todo/${id}`);
  const status = response.status;
  console.log("DEBUG:")
  console.log("    GET STATUS:", status);
  return response.data;
}

export const createTodo = async (data: TodoDto): Promise<number> => {
  const response = await axios.post("/Todo", data);
  const status = response.status;
  console.log("DEBUG:")
  console.log("    CREATE STATUS:", status);
  return status;
}

export const updateTodo = async (id: number, data: TodoDto): Promise<number> => {
  const response = await axios.put(`/Todo/${id}`, data);
  const status = response.status;
  console.log("DEBUG:")
  console.log("    UPDATE STATUS:", status);
  return status;
}

export const updateTodoStatus = async (id: number, data: TodoDto): Promise<number> => {
  data.status = data.status === Status.Open
    ? Status.Closed
    : Status.Open;
  const response = await axios.put(`/Todo/${id}`, data);
  const status = response.status;
  console.log("DEBUG:")
  console.log("    UPDATE STATUS:", status);
  return status;
}

export const deleteTodo = async (id: number): Promise<number> => {
  const response = await axios.delete(`/Todo/${id}`);
  const status = response.status;
  console.log("DEBUG:")
  console.log("    DELETE STATUS:", status);
  return status;
}