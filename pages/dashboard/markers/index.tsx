import DashPage from '../index'
import { useEffect, useState } from 'react';
const axios = require('axios');
interface ArrayProps {
    res: Array<Object>
    error: Error
    data: any
}

import { deleteToken, getToken } from 'src/services/token';
import {useRouter} from 'next/router'
import { Card } from '@components/Markers/Card';
const Markers = () => {
    const [data, setData]:any = useState(undefined)
    const router = useRouter()
    useEffect(() => {
        const token = getToken('access-token');
        if (token) {
            axios.get(`${process.env.MARKER}`, {
                headers: { Authorization: `Bearer ${token}`}
            }).then((res:ArrayProps) => {
                const { data } = res
                setData(data)
            }).catch((err:ArrayProps) => {
                deleteToken('access-token');
                router.push('/')
            });
        }else {
            router.push('/')
        }
            
    }, [])
    return (
        <DashPage>
            <div className="sm:ml-64 px-10 py-10 ">
                {
                    data && data.map((marker:Object) => (
                        <div key={marker.id} className="flex flex-wrap overflow-hidden ">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                            
                    ))
                }
            </div>
        </DashPage>
        

    )
}
export default Markers
