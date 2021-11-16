import { useEffect, useState, useContext } from 'react'
import { SideBar } from '@components/Dashboard/SideBar'
import { getToken } from 'src/services/token';
import router from 'next/router';
import Head from 'next/head'
import { GlobalContext } from 'src/context';
interface DashPageProps {
    children: React.ReactNode
    title: string
}
const DashPage = ({children, title}: DashPageProps) => {
    const {state} = useContext(GlobalContext)
    const {user} = state
    const [token, setToken] = useState(false)
    useEffect(() => {
        const toke = getToken('access-token')
        if(toke){
          setToken(true)
        } else {
          router.push('/')
        }
      },[])
    return (
        <>
            <Head>
                <title>{title ? title : 'BookMark - Dashboard'}</title>
            </Head>
            {token && (
                <main className="h-screen md:w-screen bg-white dark:bg-gray-800 transition duration-300">
                        <section>
                            <div className="w-full">
                                <SideBar/>
                            </div>
                            
                            {children ? (children): (
                                <div className="sm:ml-64 text-center px-10 py-10">
                                    <h1 className="text-5xl font-bold mb-20 dark:text-gray-200 mt-20">Welcome to BookMarker📚, {user ? user.username : '?'}</h1>
                                    <p className="text-2xl text-red-400">Please dont refresh the page manually for dont lose the global state</p>
                                </div>
                            )}
                        </section>
                        
                    </main>
                )}
        </>
        
        
    )
}
export default DashPage