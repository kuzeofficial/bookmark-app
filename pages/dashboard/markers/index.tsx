import DashPage from '../index'
import { useEffect, useState } from 'react';
const axios = require('axios');
interface ArrayProps {
    res: Array<Object>
    error: Error
    data: any
}
interface ArrayMap {
    mark: Object,
}
import { getToken } from 'src/services/token';
import {useRouter} from 'next/router'
import { Card } from '@components/Markers/Card';
const Markers = () => {
    const [data, setData]:any = useState(undefined)
    const router = useRouter()
    useEffect(() => {
        const token = getToken('access-token')
        if (token) {
            axios.get(`${process.env.MARKER}`, {
                headers: { Authorization: `Bearer ${token}`}
            }).then((res:ArrayProps) => {
                const { data } = res
                setData(data)
            }).catch((err:ArrayProps) => {});
        }else {
            router.push('/')
        }
            
    }, [])
    return (
        <DashPage>
            <div className="sm:ml-64 px-10 py-10 dark:bg-gray-800">
                <div className="w-full text-center">
                    <h1 className="text-5xl dark:text-gray-100 font-bold">BookMarks</h1>
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
