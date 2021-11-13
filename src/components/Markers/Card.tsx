import React from 'react'

export const Card = () => {
    return (
        <div className="w-full md:w-full sm:w-full xl:w-1/3 2xl:w-1/4 lg:w-1/2 overflow-hidden my-4 px-4">
            <div className=" bg-white flex items-center justify-center w-full">
                <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
                    <div className="p-4">
                    <span className="bg-red-500 py-2 px-4 text-sm font-semibold text-white rounded-full cursor-pointer">-30% Sale</span>
                    <h1 className="mt-4 text-3xl font-bold hover:underline cursor-pointer">Super Books</h1>
                    <p className="mt-2 font-sans text-gray-700">by Diseño Constructivo</p>
                    </div>
                    <div className="relative">
                    <img className="w-80" src="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80" />
                    <p className="absolute text-lg transform translate-x-20 -translate-y-24 bg-blue-600 text-white py-3 px-6 rounded-full cursor-pointer hover:scale-105 duration-500">Comprar ahora</p>
                    </div>
                </div>
            </div>     
        </div>
        
    )
}
