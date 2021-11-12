import {useState} from 'react'
import Link from 'next/link'
import { TopBar } from '@components/Dashboard/SideBar/TopBar'
import { Links } from './Links'
import { Profile } from '@components/Icons/Profile'
import { UpdMarker } from '@components/Icons/UpdMarker'
import { DelMarker } from '@components/Icons/DelMarker'
import { NewMarker } from '@components/Icons/NewMarker'
import { Markers } from '@components/Icons/Markers'
import { CloseSideBar } from '@components/Icons/CloseSideBar'

export const SideBar = () => {
    const [showSidebar, setShowSidebar] = useState('-left-64')
    return (
        <>
        <div className="flex sm:hidden">
            <TopBar setShowSidebar={setShowSidebar}/>
        </div>
        <nav className={`h-screen fixed top-0 sm:left-0 ${showSidebar} overflow-y-auto flex-row  flex-nowrap overflow-hidden shadow-xl bg-indigo-500  md:w-64 z-10 py-4 px-6 transition-all duration-300`}>
            <div className="flex-col">
                <div className="sm:hidden flex justify-center mb-10">
                        <button onClick={() => setShowSidebar('-left-64 w-64')}>
                           <CloseSideBar/>
                        </button>
                </div>
                <div className="text-center">
                    <Link href="/dashboard" passHref>
                        <h1 className="mb-10 sm:mt-10 font-black text-gray-300 tracking-tight md:text-3xl text-3xl cursor-pointer">DashBoard👨‍💻</h1>
                    </Link>
                </div>
                
            </div>
            <div className="mt-10 mb-4 flex flex-col items-center">
                <ul className=" flex flex-col items-center sm:items-start">
                    <Links enlace="/dashboard/markers" texto="Markers" icon={<Markers/>} />
                    <Links enlace="/dashboard/newmarker" texto="New Marker" icon={<NewMarker/>} />
                    <Links enlace="/dashboard/delmarker" texto="Delete Marker" icon={<DelMarker/>} />
                    <Links enlace="/dashboard/updmarker" texto="Update Marker" icon={<UpdMarker/>} />
                    <Links enlace="/dashboard/profile" texto="Profile" icon={<Profile/>} />
                </ul>
            </div>
        </nav>
        </>
        
    )
}
