import React from 'react'
import './GenerateLink.css'
import copyIcon from '../../assets/copy-icon.png'

const GenerateLink = () => {

  const generateLink = (len) => {
    var link = ""
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for(let i = 0 ; i < len ; i++) {
      link += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    
  }

  return (
    <div className='flex flex-col items-center justify-between'>
        <h1 className='text-7xl mb-10 text-red-800 font-bold font-sans'>Chess Duel</h1>
        <div className='flex items-center justify-between border-2 rounded w-full px-3 py-1 mb-3'>
            <div className='link w-full text-xl italic font-bold text-red-900'>jhgcdujdycxuyg</div>
            <img className='w-[40px] h-[40px] cursor-pointer bg-slate-400 rounded' src={copyIcon}/>
            
        </div>
        <button className='start bg-red-800 text-white'>Start Game</button>
    </div>
  )
}

export default GenerateLink