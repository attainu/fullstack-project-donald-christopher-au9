import React, { Component } from "react";
import "./Doctorlist.css";
import Doctorlogo from "../Doctorlist/images/doctorlogo.png";
import Nav3 from '../Navbar/Nav3'
import Navbar from '../Navbar/Navbar'

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
    <div className="Doctorlist_main_container">
    
 <Navbar/>
    <Nav3/>
      <div className="Doctorlist_container">
          <div className="Doctorlist_container_text">
            <h1>Book from 109 cosmetic/aesthetic dentist in Bangalore</h1>
            <p>With predicted wait-time & verified details</p>
          </div>
          <div className="Doctor_card">
            <div className="doctorimg">
              <img src={Doctorlogo} alt=""></img>
            </div>
            <div className="Doctor_card_info">
                <div className='Doctor_name'>
                   <span>Benjimen Richards</span>
                </div>
                <div className='Doctor_specilisation' id='Doctor_specilisation_text'>
                   <span>Doctor_specilisation</span>
                </div>
                <div className='Doctor_experience' id='Doctor_specilisation_text'>
                   <span>Doctor_experience</span>
                </div>
                <div className='Doctor_hospital_name' id='Doctor_specilisation_text'>
                   <strong>Doctor_hospital_name</strong>
                </div>
                <div className='Doctor_hospital_fee' id='Doctor_specilisation_text'> 
                   <span>Doctor_hospital_fee</span>
                </div>
                <div className='Doctor_card_stories'>
                  <button>Like</button>
                  <span>Patient stories</span>
                </div>
              </div>
              <div className="Doctor_card_buttons" >
              <div className="Doctor_card_button_avaliable">
                <span>Available</span>
              </div>
              <div className="Doctor_card_button_appoint">
                <button id='appointment'>Book appointment</button>
                <button id='video'>Video Consult</button>
              </div>
            </div>
            </div>
            
          </div>
        </div>
  );}
  
}

export default Doctorlist;
