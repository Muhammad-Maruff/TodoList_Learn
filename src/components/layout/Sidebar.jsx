"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import 
{   
    HiOutlineClipboardDocumentList, 
    HiOutlineCog6Tooth, 
    HiOutlinePhone, 
    HiOutlineQuestionMarkCircle, 
    HiOutlineSquares2X2, 
    HiOutlineUser 
}  from "react-icons/hi2";

const menuItems = [
        {
            icon: <HiOutlineSquares2X2 className="w-5 h-5"/>,
            label: "Dashboard",
            path: "/dashboard",
        },

        {
            icon: <HiOutlineClipboardDocumentList className="w-5 h-5"/>,
            label: "TodoList",
            path: "/todos",
        },

        {
            icon: <HiOutlineUser className="w-5 h-5"/>,
            label: "User",
            path: "/users",
        },

        {
            icon: <HiOutlineCog6Tooth className="w-5 h-5"/>,
            label: "Setting",
            path: "/settings",
        },
    ];

    const helpItems = [
        {
            icon: <HiOutlineQuestionMarkCircle className="w-5 h-5"/>,
            label: "Help",
            path: "/help"
        },
        
        {
            icon: <HiOutlinePhone className="w-5 h-5"/>,
            label: "Contact",
            path: "/contact",
        },
    ];

export default function Sidebar() 
{
    const pathname = usePathname();

    return (
        <aside className="bg-primary-light w-72 min-h-screen border border-gray-200">

           <div className="flex p-4 items-center gap-4">
                <div className="bg-primary text-primary-light w-12 h-12 rounded-md flex items-center justify-center">
                    <HiOutlineClipboardDocumentList className="w-6 h-6"/>
                </div>
                <h1 className="font-bold text-xl text-gray-900">Todo List</h1>
           </div>

           <nav className="flex-1 px-4 py-6 border-t">
                <ul className="space-y-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <li key={item.path} className="font-bold">
                                <Link href={item.path} className={`flex gap-3 px-8 py-3 rounded-md transition-colors ${isActive ? "bg-primary text-primary-light" : "text-primary-gray hover:bg-gray-100"}`}>
                                    {item.icon}
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
           </nav>

           <div className="px-4 py-2 border-t">
                <ul className="space-y-4">
                    {helpItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <li key={item.path} className="font-bold">
                                <Link href={item.path} className={`flex gap-3 px-8 py-3 rounded-md transition-colors ${isActive ? "bg-primary text-primary-light": "text-primary-gray hover:bg-gray-100"}`}>
                                    {item.icon}
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
           </div>
           
        </aside>
    );

}

