import {useState} from 'react'
import Link from 'next/link'
import { TopBar } from '@components/Dashboard/TopBar'

export const SideBar = () => {
    const [showSidebar, setShowSidebar] = useState('-left-64')
    return (
        <>
        <div className="flex sm:hidden">
            <TopBar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
        </div>
        <nav className={`h-screen fixed top-0 sm:left-0 ${showSidebar} overflow-y-auto flex-row  flex-nowrap overflow-hidden shadow-xl bg-indigo-500  md:w-64 z-10 py-4 px-6 transition-all duration-300`}>
            <div className="flex-col">
                <div className="sm:hidden flex justify-center mb-10">
                        <button onClick={() => setShowSidebar('-left-64 w-64')}>
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                </div>
                <div className="text-center">
                    <Link href="/dashboard" passHref>
                        <h1 className="mb-10 sm:mt-10 font-black text-gray-300 tracking-tight md:text-3xl text-3xl cursor-pointer">DashBoard👨‍💻</h1>
                    </Link>
                </div>
                
            </div>
            <div className="mt-10 mb-4 flex flex-col items-center">
                <ul className="relative flex flex-col items-center sm:items-start">
                    <Link href="/dashboard/markers" passHref>
                        <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold  rounded-lg cursor-pointer">   
                                <span>Markers</span>    
                        </li>
                    </Link>
                    <Link href="/dashboard/newmarker" passHref>
                    <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold  rounded-lg cursor-pointer">                   
                            <span>Create New Marker</span>
                    </li>
                    </Link>
                    <Link href="/dashboard/delmarker" passHref>
                    <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold  rounded-lg cursor-pointer">             
                            <span>Remove Marker</span>              
                    </li>
                    </Link>
                    <Link href="/dashboard/updmarker" passHref>
                    <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold  rounded-lg cursor-pointer">
                            <span >Update Marker</span>
                    </li>
                    </Link>
                    <Link href="/dashboard/profile" passHref>
                        <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold  rounded-lg cursor-pointer">
                                <span>Profile</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
        </>
        
    )
}
