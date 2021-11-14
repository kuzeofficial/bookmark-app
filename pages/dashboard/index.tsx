import { useEffect, useState } from 'react'
import { SideBar } from '@components/Dashboard/SideBar'
import { getToken } from 'src/services/token';
import router from 'next/router';
interface DashPageProps {
    children: React.ReactNode
}
const DashPage = ({children}: DashPageProps) => {
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
            {token && (
                <main className="h-screen md:w-screen bg-white dark:bg-gray-800 transition duration-300">
                        <section>
                            <div className="w-full">
                                <SideBar/>
                            </div>
                            
                            {children ? (children): (
                                <div className="ml-64 px-10 py-10 ">
                                    Hello
                                </div>
                            )}
                        </section>
                        
                    </main>
                )}
        </>
        
        
    )
}
export default DashPage