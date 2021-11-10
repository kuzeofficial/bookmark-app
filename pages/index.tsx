import type { NextPage } from 'next'
import { Avatar } from "@components/Avatar/"
import { Login } from '@components/Login'

const Home: NextPage = () => {
  return (
    <>
        
        <div className="flex relative flex-col items-center h-screen justify-center ">
          <Login/>
        </div>

    </>
  )
}

export default Home
