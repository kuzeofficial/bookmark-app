import React from 'react'
import DashPage from '../index'
import router from 'next/router';
import { useEffect, useState } from 'react'
import { getToken } from 'src/services/token';
import {Form} from '@components/DeleteMarker/Form'
const DelMarker = () => {
    const [token, setToken] = useState(false)
    useEffect(() => {
      const toke = getToken('access-token')
      if(toke){
        setToken(true)
      } else {
        router.push('/')
      }
    },[])
    return (
        <DashPage>
            {token && <Form/>}
        </DashPage>
    )
}

export default DelMarker