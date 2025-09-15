import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";

export default function TodoItem ({ todo, onToggle, onDelete , onEdit }) {
    const { id, title, description, isCompleted } = todo;

    return (
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <input type="checkbox" checked={isCompleted === true} onChange={() => onToggle(id)} className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <h3 className={`font-medium ${isCompleted ? "line-through text-gray-400" : "text-gray-900"}`}>
                        {title}
                    </h3>
                </div>

                <div className="flex space-x-2">
                    <button onClick={() => onEdit(todo)} className="text-gray-400 hover:text-blue-500 p-1">
                        <HiOutlinePencil className="h-5 w-5"/>
                    </button>

                    <button onClick={() => onDelete(id)} className="text-gray-400 hover:text-red-500 p-1" aria-label="Delete Todo">
                        <HiOutlineTrash className="h-5 w-5"/>
                    </button>
                </div>
            </div>

            {description && (
                <p className={`mt-2 text-sm ${isCompleted ? "text-gray-400 line-through" : "text-gray-600"} pl-8`}>
                    {description}
                </p>
            )}
        </div>
    );
}
