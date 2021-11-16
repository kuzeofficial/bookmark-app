import type { NextPage } from 'next'
import  Head  from "next/head"
import { Login } from '@components/Login'
import { TopBarLogin } from '../src/components/Login/TopBar/index';

const Home: NextPage = () => {
  return (
    <main className="bg-gray-100 dark:bg-gray-900 transition duration-300">
      <Head>
        <title>BookMarker📚</title>
      </Head>
        <TopBarLogin/>
        <div className="flex relative flex-col items-center h-screen justify-center ">
          <Login/>
        </div>
    </main>
  )
}

export default Home
