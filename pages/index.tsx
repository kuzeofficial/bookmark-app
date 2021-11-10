import type { NextPage } from 'next'
import { Avatar } from "@components/Avatar/"

const Home: NextPage = () => {
  return (
    <>
        <h1 className="text-center my-24 font-black tracking-tight text-6xl">Our homepage</h1>
        <Avatar/>
    </>
  )
}

export default Home
