"use client";

import { useEffect, useState } from "react";

export default function TodoForm ({ todo , onSubmit, onCancel }) {
    const [ formData, setFormData ] = useState({
        title: todo ?.title || "",
        description: todo ?.description || "",
    });

    useEffect(() => {
        if (todo) {
            setFormData({
                title: todo.title || "",
                description: todo.description || "",
            });
        }
    }, [todo]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData ({ 
            ...formData, 
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title.trim()) return;

        onSubmit({
            ...formData, 
            id: todo?.id,
            isCompleted: todo?.isCompleted || false
        });

        if(!todo) {
            setFormData({
                title: "",
                description: "",
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Judul
                </label>
                <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus: border-blue-500 focus: outline-none focus:ring-1 focus: ring-blue-500" placeholder="Masukkan judul" required />
            </div>

            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Deskripsi (Opsional)
                </label>
                <textarea name="description" id="description" value={formData.description} onChange={handleChange} rows={3} className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Tambahkan deskripsi..."/>
            </div>

            <div className="flex justify-end space-x-3">
                {oncancel && (
                    <button type="button" onClick={onCancel} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                        Batal
                    </button>
                )}
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    {todo ? "Update" : "Tambah"}
                </button>
            </div>
        </form>
    );
}