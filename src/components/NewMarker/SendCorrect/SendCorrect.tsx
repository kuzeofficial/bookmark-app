import React from 'react'
interface SendCorrectProps {
  message: string
}
export const SendCorrect = ({message}:SendCorrectProps) => {
    return (
      <div className="bg-green-400 border-t-4 border-green-100 rounded-md text-gray-100 px-4 py-2 shadow-md" role="alert">
        <div className="flex justify-center">
          <div className="mr-1"><svg className=" h-6 w-6 text-teal-500 " fill="#4BB543" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
          <div className="flex align-center text-center ">
            <p className="font-bold">{message}</p>
          </div>
        </div>
      </div>
    )
}
