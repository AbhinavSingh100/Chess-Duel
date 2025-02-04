import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, provider, signInWithPopup } from '../firebase/FirebaseConfig'

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)

    }

    let navigate = useNavigate()



  return (
    <div className='flex h-screen w-screen bg-white justify-center items-center'>
        <div className='bg-white border-2 border-red-800 p-10 rounded-2xl font-serif '>
            <h1 className='text-3xl mb-10 text-red-800 font-bold'>Login</h1>
            <form onSubmit={(e) => submitHandler(e)} className='flex flex-col gap-5 text-xl'>
                <label className='text-red-800 font-semibold'>Email</label>
                <input 
                    onChange={(e) => setUsername(e.target.value)}
                    required className="w-96 h-10 text-slate-900 bg-white border-2 border-red-800 rounded-full px-3 mb-3 placeholder:text-red-800 placeholder:opacity-40"
                    type="email" placeholder='Enter email' />
                <div className='flex justify-between p-1'>
                    <label className='text-red-800 font-semibold'>Password</label>
                    <button type='button' className='text-red-800 text-base font-bold'
                        onClick={togglePasswordVisibility} ><i class={showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} style={{color: "#991b1b"}}></i> Show</button>
                </div>
                <input 
                    onChange={(e) => setPassword(e.target.value)}
                    required className="w-96 h-10 text-slate-500 bg-white border-2 border-red-800 rounded-full px-3 mb-3 placeholder:text-red-800 placeholder:opacity-40" 
                    type={showPassword ? "text" : "password"} placeholder='Enter password' />
                    
                <button 
                    onClick={() => {
                        navigate('/home/new')
                    }}
                    type='submit' 
                    className='w-96 h-10 rounded-full bg-red-800 text-white'>Login</button>
            </form>
            
        </div>
        
    </div>
  )
}

export default Login