// Importing layout page
import DashPage from '../index'
// Importing feature of router
import router from 'next/router';
// Importing hooks
import { useEffect, useState } from 'react'
// Importing function for get Token of the cookies
import { getToken } from 'src/services/token';
// Importing Form component
import {Form} from '@components/DeleteMarker/Form'
const DelMarker = () => {
    // Define the state of the token
    const [token, setToken] = useState(false)
    // Execute this function in the first render or refresh
    useEffect(() => {
      // Get token and save the value in the const 
      const toke = getToken('access-token')
      // If token exist
      if(toke){
        // Set the state in true
        setToken(true)
      } else {
        // The state is false and redirect to the login page
        router.push('/')
      }
    },[])
    return (
        <DashPage title="BookMark - Delete Marker">
            {token && <Form/>}
        </DashPage>
    )
}

export default DelMarker