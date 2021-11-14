
import { SideBar } from '@components/Dashboard/SideBar'
interface DashPageProps {
    children: React.ReactNode
}
const DashPage = ({children}: DashPageProps) => {

    return (
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
        
    )
}
export default DashPage