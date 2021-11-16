// Importing type for the page
import type { NextPage } from 'next'
// Importing hooks
import {useEffect, useState} from 'react'
// Importing features next
import  Head  from "next/head"
import router from 'next/router';
// Importing components of login
import { Login } from '@components/Login'
// Importing the TopBarLogin component
import { TopBarLogin } from '../src/components/Login/TopBar/index';
// Importing function for getToken
import { getToken } from 'src/services/token';

const Home: NextPage = () => {
  // Defining the state , if render is true then not render the login, if not then render the login
  const [render, setRender] = useState(false)
  // Executing the function when the component is mounted in the first render or refresh manually
  useEffect(() => {
    // Getting the token from the cookies
    const tokenexist = getToken('access-token')
    // If token exist then the state is true and redirect to the dashboard
    if(tokenexist) {
      setRender(true)
      router.push('/dashboard')
    }
  },[])
  return (
    <>
    {render === true ? <div></div> : (
      <main className="bg-white dark:bg-gray-900 transition duration-300">
        <Head>
          <title>BookMarker📚</title>
        </Head>
          <TopBarLogin/>
          <div className="flex relative flex-col items-center h-screen justify-center ">
            <Login/>
          </div>
      </main>
    )}
    
    </>
    
  )
}

export default Home
