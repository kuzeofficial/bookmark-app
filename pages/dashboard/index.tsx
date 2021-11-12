
import { SideBar } from '@components/Dashboard/SideBar'
const DashPage = ({children}:any) => {

    return (
        <main className="h-screen bg-white dark:bg-gray-800 transition duration-300">
            <section className="flex flex-wrap overflow-auto">
                <div className="w-full">
                    <SideBar/>
                </div>
                  
                {children ? (children): (
                     <div className="md:ml-64 px-10 py-10 flex flex-wrap overflow-">
                        Hello
                    </div>
                )}
            </section>
            
        </main>
        
    )
}
export default DashPage