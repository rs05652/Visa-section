import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import UserDetails from './components/UserDetails'
import Visadetails from './components/Visadetails'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Header/>}></Route>
        <Route path='/UserDetails' element={<UserDetails/>}></Route>
        <Route path="/UserDetails/visadetails" element={<Visadetails />} />
      </Routes>
    </>
  )
}

export default App
