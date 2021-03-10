
import './App.css';
import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Homepage from './Components/Homepage/Homepage'

import Doctorlist from './Components/Doctorlist/Doctorlist';
import Appointments from './Components/Appointments/Appointments';

import Main_authpage from './Components/Registerpage/Main_authpage';
import Datebooking from './Components/Doctorlist/Datebooking';
import Confirmappointment from './Components/Appointments/Confirmappointment';
const App = () => {
  return (
    <div>
      <BrowserRouter>

        <Route path='/' exact component={Homepage}/>
        <Route path='/doctorlist' component={Doctorlist}/>
        <Route path='/appointments' component={Appointments}/>
        <Route path='/booking' component={Datebooking}/>
        <Route path='/authpage' component={Main_authpage}/>
        <Route path='/confirmappointment/:id' component={Confirmappointment}/>
      </BrowserRouter>
    </div>
  )
}

export default App
