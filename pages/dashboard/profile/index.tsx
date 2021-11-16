// Importing hooks
import {useState, useEffect, useContext} from 'react'
// Importing the page layout
import DashPage from '../index'
// Importing function for set action type and the context 
import { ActionType, GlobalContext } from 'src/context';
// Importing functions for get and delete token
import { deleteToken, getToken } from 'src/services/token';
// Import next features
import Head from 'next/head'
import router from 'next/router'

const Profile = () => {
    // Destructuring the global context
    const {state, dispatch} = useContext(GlobalContext)
    // State that change when in the refresh get token or not
    const [token, setToken] = useState(false)
    // Destructuring the state of the GlobalContext, getting the user
    const {user} = state
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
    // Function for remove user of the GlobalContext
    async function RemoveUser() {
        // Call the dispatch for remove the user
        dispatch({
            type: ActionType.RemoveUser,
        })
        // Execute the functions for delete the values of this tokens
        deleteToken('access-token')
        deleteToken('refresh-token')
        // Redirect to the home page
        await router.push('/')
    }
    return (
        <>
            <DashPage title="BookMark - Profile">
                {token && (
                    <div className="md:ml-64 px-10 py-10 flex flex-wrap flex-col items-center">
                        <h1 className="text-5xl dark:text-gray-100 font-bold">Profile😎</h1>
                        <img alt="ProfileImage" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" className="shadow-xl rounded-full w-40 h-40 align-middle border-none mt-20"/>
                        <h3 className="mt-5 text-2xl dark:text-gray-100">{user ? user.username : 'Unknown'}</h3>
                        <div className="mt-10 flex-col flex items-center">
                            <button onClick={() => RemoveUser()} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 ">Logout</button>
                            <span className="text-gray-500">If the user is unknown please logout and log in again</span>
                        </div>
                    </div>
                )}
            </DashPage>
        </>
        
    )
}
export default Profile