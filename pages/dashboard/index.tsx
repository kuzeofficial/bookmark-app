
import { SideBar } from '@components/Dashboard/SideBar'
import { TopBar } from '@components/Dashboard/TopBar'
const DashPage = ({children}:any) => {

    return (
        <main className="h-screen bg-gray-100 dark:bg-gray-900 transition duration-300">
            <section className="flex flex-wrap overflow-hidden">
              <div className="w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                  <SideBar/>
              </div>
                {children ? (children): (
                    <div className="mobile-contenido w-full text-center overflow-hidden sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                        <div className="pt-14 pb-28 px-3 md:px-8 h-auto">Bienvenido al Dashboard</div>
                    </div>
                )}
            </section>
            
        </main>
        
    )
}
export default DashPage