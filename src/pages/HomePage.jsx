import React from 'react'
import './HomePage.css'
import NewGame from '../components/HomePage/NewGame'
import LinkGame from '../components/HomePage/LinkGame'
import GenerateLink from '../components/HomePage/GenerateLink'
import EnterLink from '../components/HomePage/EnterLink'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
    <div className='home-background flex justify-center items-center w-screen h-screen'>
      <Outlet/>
        {/* <NewGame/> */}
        {/* <LinkGame/> */}
        {/* <GenerateLink/> */}
        {/* <EnterLink/> */}
    </div>

    </>
  )
}

export default HomePage