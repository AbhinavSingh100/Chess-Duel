import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Game from './pages/Game'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NewGame from './components/HomePage/NewGame'
import LinkGame from './components/HomePage/LinkGame'
import GenerateLink from './components/HomePage/GenerateLink'
import EnterLink from './components/HomePage/EnterLink'

function App() {
  const [count, setCount] = useState(0)
  

  let player1 = {name: "Abhinav Singh", rating: 1100, img: ""}
  let player2 = {name: "Shankarshan Dwivedi", rating: 1100, img: ""}

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<HomePage/>}>
          <Route path='new' element={<NewGame />}/>
          <Route path="link" element={<LinkGame />}/>
          <Route path="link/generate" element={<GenerateLink />} />
          <Route path="link/enter" element={<EnterLink />} />
        </Route>
        <Route path='/game' element={<Game player1={player1} player2={player2}/>}/>
      </Routes>

      </BrowserRouter>
      
      
      
      
    </>
  )
}

export default App
