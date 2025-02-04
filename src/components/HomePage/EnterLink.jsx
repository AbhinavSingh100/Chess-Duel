import React from 'react'
import './EnterLink.css'

const EnterLink = () => {
  return (
      <div className='flex flex-col items-center justify-between'>
          <h1 className='text-7xl mb-10 text-red-800 font-bold font-sans'>Chess Duel</h1>
         <div className='flex items-center justify-between  w-full py-1 mb-3'>
            <h2 className='w-1/2 font-bold text-xl '>Enter Link :</h2>
            <input className='w-full border-2 rounded px-1 text-lg italic font-sans' type='text' ></input>
         </div>
          <button className='start bg-red-800 text-white'>Start Game</button>
      </div>
    )
}

export default EnterLink