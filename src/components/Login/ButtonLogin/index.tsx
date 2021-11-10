import React from 'react'

export const ButtonLogin = ({children}:React.ReactNode) => {
    return (
        <button className="flex items-center justify-center text-center bg-blue-500 w-36 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            {children}
        </button>
    )
}
