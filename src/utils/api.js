import axios from "axios";

const API_URL = "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
});

export const todoApi = {
  getAll: async () => {
    const response = await api.get('/todos');
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/todos/${id}`);
    return response.data;
  },

  create: async (todoData) => {
    const validData = {
      title: todoData.title,
      description: todoData.description || null,
      isCompleted: todoData.isCompleted || false,
    };

    const response = await api.post("/todos", validData);
    return response.data;
  },

  update: async (id, todoData) => {
    const response = await api.put(`todos/${id}`, todoData);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`todos/${id}`);
    return response.data;
  },
  
};
