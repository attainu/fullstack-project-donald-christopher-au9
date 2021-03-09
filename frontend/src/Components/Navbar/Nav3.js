import React from 'react'

import { BiChevronDown } from "react-icons/bi";

const Nav3 = () => {
    return (
        <div>
          <div className="Nav3">
          <div className="main_Nav3">
            <div className="dropdowns">
              <div className="checkbox3" style={{marginLeft:'50px'}}>
                <input type="checkbox" style={{marginRight:'0.5rem',backgroundColor:'transparent'}}/>
                <label>Video consult</label>
              </div>
            </div>
            <div className="dropdowns">
              <div className="checkbox">
                <label>Avaliablity </label>
                <BiChevronDown />
              </div>
            </div>
            <div className="dropdowns" >
              <div className="checkbox2" style={{backgroundColor:'none',}}>
                <label  style={{marginLeft:'10px'}}>All filter </label>
                <BiChevronDown />
              </div>
            </div>
            <div className="dropdowns" id="dropdown4">  
              <label style={{marginRight:'10px'}}>Sort by </label>
              <div className="checkbox" >
                <label>Relevance </label>
                <BiChevronDown />
              </div>
            </div>
          </div>
          </div>
        </div>
    )
}

export default Nav3
