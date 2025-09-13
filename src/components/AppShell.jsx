"use client";
import { useState , useEffect } from "react";
import Sidebar from "./layout/Sidebar";
import Navbar from "./layout/Navbar";

export default function AppShell ({children}){
    const [sidebarOpen , setSidebarOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth >= 1024) {
                setSidebarOpen(false);
            }
        };

        window.addEventListener('resize' , handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex h-screen overflow-hidden">
            {sidebarOpen && (
                <div className="fixed inset-0 z-20 bg-gray-800 bg-opacity-50 transition-opacity lg:hidden" 
                onClick={() => setSidebarOpen(false)} aria-hidden="true"
                />
            )}

            <div className={`fixed inset-y-0 left-0 z-30 w-72 transform transition duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-auto`}>
                <Sidebar />
            </div>

            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

                <main className="flex-1 overflow-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}