"use client";

import { useEffect, useState } from "react";
import TodoItem from "@/components/todos/TodoItem";
import TodoForm from "@/components/todos/TodoForm";
import { todoApi } from "@/utils/api";
import { HiPlus } from "react-icons/hi2";

export default function TodosPage() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [editingTodo, setEditingTodo] = useState(null);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const data = await todoApi.getAll();
                setTodos(data);
                setLoading(false);
            } catch (err) {
                console.log("Error fetching todos: ", err);
                setError("Gagal memuat todo");
                setLoading(false);
            }
        };

        fetchTodos();
    }, []);

    const addTodo = async (todoData) => {
        try {
            const newTodo = await todoApi.create(todoData);
            setTodos([...todos, newTodo]);
            setShowForm(false);
        } catch (err) {
            console.log("Error adding todo:", err);
            setError("Gagal menambahkan todo");
        }
    };

    const updateTodo = async (todoData) => {
        try {
            const { id } = editingTodo;
            const updatedTodo = await todoApi.update(id, todoData);
            setTodos (
                todos.map(todo =>
                    todo.id === id ? { ...todo, ...updatedTodo } : todo
                )
            );

            setEditingTodo(null);
            setShowForm(false);
        } catch (err) {
            console.error("Error updating todo : ", err);
            setError("Gagal mengupdate todo");
        }
    };

    const handleEdit = (todo) => {
        setEditingTodo(todo);
        setShowForm(true);
    };

    const handleCancel = () => {
        setEditingTodo(null);
        setShowForm(false);
    };

    const toggleTodo = async(id) => {
        try {
            const todoToToggle = todos.find(todo => todo.id === id);
            const updatedTodo = {
                isCompleted: todoToToggle.isCompleted ? false : true
            };

            await todoApi.update(id, updatedTodo);

            setTodos(
                todos.map((todo) => todo.id === id ? { ...todo, isCompleted: todoToToggle.isCompleted ? false : true} : todo )
            );
        } catch(err) {
            console.error("Error toggling todo: ", err);
            setError("Gagal mengubah status todo");
        }
    };

    const deleteTodo = async (id) => {
        try {
            await todoApi.delete(id);
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (err) {
            console.error("Error deleting todo: ", err);
            setError("Gagal menghapus todo");
        }
    };

    return (
        <div className="space-y-6 p-6">
            <div className="flex justify-end items-center">
                <button onClick={() => {
                    if (showForm) {
                        setEditingTodo(null);
                    }
                    setShowForm(!showForm);
                }} className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md hover: bg-blue-700">
                    <HiPlus className="h-5 w-5"/>
                    {showForm ? "Batal" : "Tambah Todo"}
                </button>
            </div>

            {showForm && (
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h2 className="text-lg font-medium mb-4">
                        {editingTodo ? "Edit Todo" : "Tambah Todo Baru"}
                    </h2>
                    <TodoForm todo={editingTodo} onSubmit={editingTodo ? updateTodo : addTodo } onCancel={handleCancel}/>
                </div>
            )}

            {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-md">
                    {error}
                </div>
            )}

            <div className="space-y-4">
                {loading ? (
                    <div className="text-center py-8">
                       <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
                       <p className="mt-2 text-gray-600">Memuat data...</p>
                    </div>
                ) : todos.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-100">
                        <p className="text-gray-500">Belum ada todo</p>
                        {!showForm && (
                            <button onClick={() => setShowForm(true)} className="text-blue-600 font-medium mt-2 hover:underline">
                                Tambah todo baru ?
                            </button>
                        )}
                    </div>
                ) : (
                    todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} onEdit={handleEdit} />
                    ))
                )}
            </div>
        </div>
    );
}