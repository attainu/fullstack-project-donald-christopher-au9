import './Css/Homepage.css'
import React from 'react'
import Download from './Download'
import Doctor from './Doctor'
import Find from './Find'
import Speciality from './Speciality'
import Read from './Read'
import Footer from './Footer'
import Navbar from '../Navbar/Navbar'
const Homepage = () => {
    return (
        <div className='Home_container'>
              <Navbar/>
            <Doctor/>
            <Find/>
            <Speciality/>
            <hr/>
            <Read/>
            <Download/>
            <Footer/>
        </div>
        
    )
}

export default Homepage
