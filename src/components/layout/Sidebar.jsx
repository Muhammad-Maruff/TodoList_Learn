"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as HiIcons from "react-icons/hi2";

const menuItems = [
        {
            icon: <HiIcons.HiOutlineSquares2X2 className="w-5 h-5"/>,
            label: "Dashboard",
            path: "/dashboard",
        },

        {
            icon: <HiIcons.HiOutlineClipboardDocumentList className="w-5 h-5"/>,
            label: "TodoList",
            path: "/todolist",
        },

        {
            icon: <HiIcons.HiOutlineUser className="w-5 h-5"/>,
            label: "User",
            path: "/user",
        },

        {
            icon: <HiIcons.HiOutlineCog6Tooth className="w-5 h-5"/>,
            label: "Pengaturan",
            path: "/pengaturan",
        },
    ];

    const helpItems = [
        {
            icon: <HiIcons.HiOutlineQuestionMarkCircle className="w-5 h-5"/>,
            label: "Bantuan",
            path: "/bantuan"
        },
        
        {
            icon: <HiIcons.HiOutlinePhone className="w-5 h-5"/>,
            label: "Hubungi Kami",
            path: "/hubungi",
        },
    ];

export default function Sidebar() 
{
    const pathname = usePathname();

    return (
        <aside className="bg-primary-light w-72 min-h-screen border border-gray-200">

           <div className="flex p-4 items-center gap-4">
                <div className="bg-primary text-primary-light w-14 h-14 rounded-md flex items-center justify-center">
                    <HiIcons.HiOutlineClipboardDocumentList className="w-8 h-8"/>
                </div>
                <h1 className="font-bold text-xl">Todo List</h1>
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

