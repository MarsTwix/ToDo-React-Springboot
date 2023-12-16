import axios from 'axios';

import { Todo } from "../models/todo";

const baseUrl = 'http://localhost:8080';

const api = {
    todo: {
        async getAll(): Promise<Todo[]> {
            const response = await axios.get<Todo[]>(`${baseUrl}/todos`);
            return response.data;
        },
        async remove(id: number): Promise<void> {
            await axios.delete(`${baseUrl}/todos/${id}`);
        }
    }
};

export default api;