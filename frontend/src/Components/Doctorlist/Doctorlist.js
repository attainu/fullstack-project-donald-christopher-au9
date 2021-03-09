import React, { Component } from "react";
import "./Doctorlist.css";
import Doctorlogo from "../Doctorlist/images/doctorlogo.png";
import Nav3 from '../Navbar/Nav3'

class Doctorlist extends Component{
  constructor()
  {
    super()
    this.state={
      screenheight:''
    }
  }
  render()
  {
  return (
    <div className="listingleft">
    <Nav3/>
      <div className="Doctorlist_container">
        <div className="main">
          <div className="maintext">
            <h1>Book from 109 cosmetic/aesthetic dentist in Bangalore</h1>
            <p>With predicted wait-time & verified details</p>
          </div>
          <div className="listing_doctor_card">
            <div className="doctorimg">
              <img src={Doctorlogo} alt=""></img>
            </div>
            <div className="info_section">
              <h2>Donald christopher</h2>
              <div className="profession">
                <div className="specilization">
                  <span>Cosmetic/Aesthetic Dentist</span>
                </div>
                <div className="experience">
                  <span>15 years experience overall</span>
                </div>
              </div>
              <div className="consultfee">
                <span>Nagawara,</span>
                <span>Bangalore. </span>
                <span>Aesthetic Dental Clinic +3 more </span>
                <br></br>
                <span>₹250 </span>
                <span>Consultation fee at clinic</span>
              </div>
            </div>
            <div className="appointment_section">
              <div className="aval">
                <span>Available</span>
              </div>
              <div className="but">
                <button>Book appointment</button>
                <button>Video Consult</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );}
  
}

export default Doctorlist;
