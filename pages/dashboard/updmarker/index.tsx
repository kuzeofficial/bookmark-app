// Importing the page layout
import DashPage from '../index'
// Importing hooks
import {useEffect, useState} from 'react'
// Importing features of next
import router from 'next/router'
// Importing function for getToken of cookies
import { getToken } from 'src/services/token';
import { Form } from '@components/UpdateMarker/Form';
const UpdateMarker = () => {
    // State that change when in the refresh get token or no
    const [token, setToken] = useState(false)
    // Execute this function in the first render or refresh
    useEffect(() => {
        // Get the value of the token with the key access-token
        const toke = getToken('access-token')
        // If toke exist then set the state token to true, if not then redirect to the home page
        if(toke){
          setToken(true)
        } else {
          router.push('/')
        }
    },[])
    return (
        <>
            <DashPage title="Bookmark - Updater">
                {token && <Form/>}
            </DashPage>
        </>
        
    )
}
export default UpdateMarker