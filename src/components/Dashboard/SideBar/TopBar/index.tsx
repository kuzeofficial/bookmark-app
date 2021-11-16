import { DarkMode } from '@components/Icons/DarkMode'
import { HambMenu } from '@components/Icons/HambMenu'
import { LightMode } from '@components/Icons/LightMode'
import useDarkMode from 'src/hooks/useDarkMode'
interface TopBarProps {
    setShowSidebar: React.Dispatch<React.SetStateAction<string>>
}
export const TopBar = ({setShowSidebar}:TopBarProps) => {
    const [colorTheme, setTheme] = useDarkMode()
    return (
        <section className="flex-1 flex flex-col">
            <nav className="px-4 flex justify-between bg-gray-100 shadow-lg dark:bg-gray-900 transition duration-300 md:h-18 h-16 w-full">
                <ul className="flex items-center">
                    <li className="md:ml-6 h-10 w-44">
                        <h1 className="text-2xl dark:text-gray-100 text-black">DashBoard👨‍💻</h1>
                    </li>
                </ul>


                <ul className="flex items-center">
                    <li className="md:pr-6">
                        {colorTheme === 'dark' ? (
                            <span className="w-10 h-10 text-white bg-indigo-500 hover:bg-indigo-700 rounded-full cursor-pointer shadow-lg flex items-center justify-center" onClick={() => setTheme(colorTheme)}>
                                <LightMode/>
                            </span>
                        ):
                        (
                            <span className="w-10 h-10 text-white bg-indigo-500 hover:bg-indigo-700 rounded-full cursor-pointer shadow-lg flex items-center justify-center" onClick={() => setTheme(colorTheme)}>
                                <DarkMode/>
                            </span>
                        )}
                        
                        
                    </li>
                    <li className="ml-4">
                        <div className="lg:hidden">
                            <button onClick={() => setShowSidebar('left-0 w-full')}>
                                    <HambMenu/>
                            </button>
                        </div>
                    </li>
                </ul>
            </nav>
        </section>
    )
}
