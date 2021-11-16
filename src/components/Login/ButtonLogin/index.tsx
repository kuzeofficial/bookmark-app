import React from 'react'
interface ButtonLoginProps {
    children: React.ReactNode
}
export const ButtonLogin = ({children}:ButtonLoginProps) => {
    return (
        <button className="flex items-center justify-center text-center bg-indigo-500 w-36 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            {children}
        </button>
    )
}
