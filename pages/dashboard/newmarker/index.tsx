import { useEffect, useState } from 'react'
import DashPage from '../index'
import { getToken } from 'src/services/token';
import { Form } from '@components/NewMarker/Form';
import router from 'next/router';
const NewMarker: React.FC = () => {
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
export default NewMarker