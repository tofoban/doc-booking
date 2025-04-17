import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MyAppointments from './pages/MyAppointments'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/my-appointment' element={<MyAppointments/>}/>
        <Route path='/appointment/:docId' element={<MyAppointment/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App