import axios from "axios";

import { Todo } from "../models/todo";

const baseUrl = "http://localhost:8080";

const api = {
  todo: {
    async getAll(): Promise<Todo[]> {
      const response = await axios.get<Todo[]>(`${baseUrl}/todos`);
      return response.data;
    },
    async getById(id: number): Promise<Todo[]> {
      const response = await axios.get<Todo[]>(`${baseUrl}/todos/${id}`);
      return response.data;
    },
    async create(title: string): Promise<Todo[]> {
      console.log(title);
      const response = await axios.post<Todo[]>(`${baseUrl}/todos`, { title });
      return response.data;
    },
    async deleteById(id: number): Promise<void> {
      await axios.delete<Todo[]>(`${baseUrl}/todos/${id}`);
    },
    async toggleCompleted(id: number): Promise<void> {
      await axios.put<Todo[]>(`${baseUrl}/todos/${id}`);
    },
  },
};

export default api;
