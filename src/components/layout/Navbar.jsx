"use client"
import { usePathname } from "next/navigation";
import { HiOutlineBars3, HiOutlineBell , HiOutlineUserCircle } from "react-icons/hi2";

function getPageTitle (pathname) {
    const title = pathname.substring(1);
    return title.charAt(0).toUpperCase() + title.slice(1)
}

export default function Navbar ({onMenuClick}) {
    const pathname = usePathname();
    const pageTitle = getPageTitle(pathname);

    return (
        <div className="flex justify-between items-center px-7 h-[81px] bg-primary-light border-b">
            <div className="flex items-center gap-2">
                <button onClick={onMenuClick} className="p-1 mr-2 text-gray-600 hover:text-gray-900 lg:hidden" aria-label="Toggle Menu">
                    <HiOutlineBars3 className="w-6 h-6"/>
                </button>
                <h1 className="font-medium text-xl text-gray-900">{pageTitle}</h1>
            </div>

            <div className="flex items-center gap-4 text-gray-500">
                <button>
                    <HiOutlineBell className="w-6 h-6"/>
                </button>
                <button>
                    <HiOutlineUserCircle className="w-6 h-6" />
                </button>
            </div>
        </div>
    )
}