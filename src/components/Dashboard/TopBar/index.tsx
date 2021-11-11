import React from 'react'
import useDarkMode from 'src/hooks/useDarkMode'
export const TopBar = ({ showSidebar, setShowSidebar }:any) => {
    const [colorTheme, setTheme] = useDarkMode()
    return (
        <section className="flex-1 flex flex-col">
            <nav className="px-4 flex justify-between bg-white shadow-lg dark:bg-gray-900 transition duration-300 md:h-18 h-16 w-full">
                <ul className="flex items-center">
                    <li className="md:ml-6 h-10 w-44">
                        <h1 className="text-2xl dark:text-gray-100 text-black">DashBoard👨‍💻</h1>
                    </li>
                </ul>


                <ul className="flex items-center">
                    <li className="md:pr-6">
                        {colorTheme === 'dark' ? (
                            <span className="w-10 h-10 text-white bg-indigo-500 hover:bg-indigo-700 rounded-full cursor-pointer shadow-lg flex items-center justify-center" onClick={() => setTheme(colorTheme)}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                            </span>
                        ):
                        (
                            <span className="w-10 h-10 text-white bg-indigo-500 hover:bg-indigo-700 rounded-full cursor-pointer shadow-lg flex items-center justify-center" onClick={() => setTheme(colorTheme)}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            </span>
                        )}
                        
                        
                    </li>
                    <li className="ml-4">
                    <div className="lg:hidden">
                    <button onClick={() => setShowSidebar('left-0 w-full')}>
                            <svg
                                    className="w-6 h-6 text-gray-500"
                                    x-show="!showMenu"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                    </button>
                    <div className={`absolute top-2 md:hidden ${showSidebar === 'left-0' ? 'left-64' : '-left-64'} z-50 transition-all duration-300`}>
                        <button onClick={() => setShowSidebar('-left-64')}>
                            <svg
                                className="w-6 h-6 text-gray-500"
                                x-show="!showMenu"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                        </button>
                    </div>
                </div>
                    </li>
                </ul>
            </nav>
        </section>
    )
}
