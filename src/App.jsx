import React from 'react'
import Index from './pages/Index/Index'
import './App.css'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import Home from './pages/Home/Home'
import View from './pages/View/View'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='appContainer'>
      <BrowserRouter>
        <Routes>
            <Route path='' element={<Index/>}/>
            <Route path='SignIn' element={<SignIn/>}/>
            <Route path='SignUp' element={<SignUp/>}/>
            <Route path='Home' element={<Home/>}/>
            <Route path='View/:id' element={<View/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App