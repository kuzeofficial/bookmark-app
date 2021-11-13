import type { NextPage } from 'next'
import {useEffect, useState} from 'react'
import  Head  from "next/head"
import { Login } from '@components/Login'
import { TopBarLogin } from '../src/components/Login/TopBar/index';
import { getToken } from 'src/services/token';
import { useRouter } from 'next/router';
const Home: NextPage = () => {
  const router = useRouter()
  const [render, setRender] = useState(false)
  useEffect(() => {
    const tokenexist = getToken('access-token')
    if(tokenexist) {
      setRender(true)
      router.push('/dashboard')
    }
  },[])
  return (
    <>
    {render === true ? <div></div> : <main className="bg-white dark:bg-gray-900 transition duration-300">
      <Head>
        <title>BookMarker📚</title>
      </Head>
        <TopBarLogin/>
        <div className="flex relative flex-col items-center h-screen justify-center ">
          <Login/>
        </div>
    </main>}
    
    </>
    
  )
}

export default Home
