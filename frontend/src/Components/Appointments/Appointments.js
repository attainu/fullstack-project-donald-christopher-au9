import React, { Component } from 'react'
import './Appointment.css'
import {GiEgyptianProfile} from 'react-icons/gi'
import {AiOutlineMenu} from 'react-icons/ai'
class Appointments extends Component {
    constructor()
    {
        super()
        this.state={
            bottomleftdisplay:"block"

        }
    }
    btndisplayhandler=()=>
    {
        const ans = this.state.bottomleftdisplay==="none"?"block":"none"
        this.setState({bottomleftdisplay:ans})
    }

    render()
    {
        return (
            <div className='Appointments_body'>
                <div className='Appointments_container'>
                <div className='Appointments_container_top'>
                    <h2>Your drive</h2>
                    <div className='Profile_list'>
                        <GiEgyptianProfile style={{height:'40px',width:'40px'}}/>
                        <div className='user_details'>
                            <span>name</span>
                            <span>number</span>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='Appointments_container_bottom'>
                <AiOutlineMenu className='Bottom_menu' onClick={this.btndisplayhandler}/>
                    <div className='bottom_left' style={{display:this.state.bottomleftdisplay}}>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                    </div>
                    <div className='bottom_right'>
                        <div className='file_img'>
                        <img src='https://drive.practo.com/images/no_record_logo.svg' alt='/'/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Appointments
