// Importing the page layout
import DashPage from '../index'
// Importing hooks
import { useEffect, useState } from 'react';
// Importing axios
const axios = require('axios');
// Declare types for the variables
interface ArrayProps {
    res: Array<Object>
    error: Error
    data: any
}
interface ArrayMap {
    mark: Object,
}
import { getToken } from 'src/services/token';
import router from 'next/router'
import { Card } from '@components/Markers/Card';
const Markers = () => {
    // State that change when get data of the API
    const [data, setData]:any = useState(undefined)
    // Execute this function in the first render or refresh
    useEffect(() => {
        // Get the token
        const token = getToken('access-token')
        // If token exist then execute the petition to the API, if not then redirect to the home page
        if (token) {
            axios.get(`${process.env.MARKER}`, {
                headers: { Authorization: `Bearer ${token}`}
            }).then((res:ArrayProps) => {
                const { data } = res
                // If the response is correct then set the state data to the response
                setData(data)
            }).catch((err:ArrayProps) => {});
        }else {
            router.push('/')
        }
            
    }, [])
    return (
        <DashPage title="BookMark - Markers">
            <div className="sm:ml-64 px-10 py-10 dark:bg-gray-800">
                <div className="w-full text-center">
                    <h1 className="text-5xl dark:text-gray-100 font-bold">BookMarks🔖</h1>
                </div>
                <div className="grid flex-wrap  2xl:grid-cols-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    data && data.map((marker:ArrayMap, index:any) => (
                        <div key={index}>
                            {marker && <Card mark={marker}/>}
                        </div>
                    ))
                }
                </div>
            </div>
        </DashPage>
        

    )
}
export default Markers
