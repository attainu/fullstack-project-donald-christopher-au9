
import './App.css';
import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Homepage from './Components/Homepage/Homepage'
import Loginpage from './Components/Login components/Loginpage';
import Navbar from './Components/Navbar/Navbar'

import Doctorlist from './Components/Doctorlist/Doctorlist';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Route path='/' exact component={Homepage}/>
        <Route path='/login' component={Loginpage}/>
        <Route path='/doctorlist' component={Doctorlist}/>
      </BrowserRouter>
    </div>
  )
}

export default App
