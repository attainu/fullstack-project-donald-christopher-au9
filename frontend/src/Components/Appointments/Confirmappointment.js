import axios from 'axios'
import React, { Component } from 'react'
import './confirmappoint.css'
import {Link} from 'react-router-dom'
const docdata='http://localhost:1111/doctors/docdata'
class Confirmappointment extends Component {
    constructor()
    {
        super()
        this.state={
            doctor:''
        }
    }
    renderdata=(data)=>
    {
        if(data)
        {
            return (
                  <div className='confirmappoint_container'>
                  <div className='confirm_nav'>
                  <Link to='/'>
                  <img
              src="https://i2.wp.com/www.cosmoderma.healios.co.in/wp-content/uploads/2019/04/practo.png?fit=1586%2C1057"
              alt="/"
            /></Link>
            <span>Alfredrichards</span>
                  </div>
                      <div className='confirm_container'>               
                        <div className='confirminfo'>
                            <div className='confirm_top'>
                                <span>In-clinic Appointments</span>
                            </div>
                            <hr/>
                            <div className='confirm_dateinfo'>
                                <span>{data.slot[0].date}</span>
                                <span>{data.slot[0].time}</span>
                            </div>
                            <hr/>
                            <div className='confirm_docinfo'>
                                <div className='doc_img'>
                                    <img src={data.profileimg} alt='/'/>
                                </div>
                                <div className='docinfo'>
                                    <span><strong>{data.fullname}</strong></span>
                                    <span>{data.experience}</span>
                                    <span>{data.specialisation}</span>

                                </div>
                            </div>
                            <hr/>
                            <div className='Hospital_info'>
                                <span>{data.hospitalname}</span>
                            </div>
                        </div>
                        <div className='Confirm_details'>
                            <div className='confirmdetails_inputs'>
                                <div className='patientinfo_top'>
                                    <span>Patient Details</span>
                                    <p>This in-clinic appointment is for:</p>
                                </div>
                                <div>
                                <div className='patient_inputs'>
                                    <input type='radio' name='patientname'/>
                                    <label>Alfredrichards</label>
                                </div>
                                <div className='patient_inputs'>
                                    <input type='radio' name='patientname' />
                                    <label>Alfredrichards</label>
                                </div>
                                </div>
                                <div className='patientinfo_top' id='provide_info'>
                                    <p>Please provide following information about Alfred Richards:</p>
                                </div>
                                <div className='Patient_info_inputs'>
                                    <span>Full Name</span>
                                    <input placeholder='Alfred Richards'/>
                                </div>
                                <div className='Patient_info_inputs'>
                                    <span>Mobile</span>
                                    <input placeholder='8886833905'/>
                                </div>
                                <div className='Patient_info_inputs'>
                                    <span>Email</span>
                                    <input placeholder=''/>
                                </div>
                                <div className='paitent_whatsapp_check'>
                                    <input type='checked'/>
                                    <span>Get updates in whatsapp number 8886833905</span>
                                </div>
                                <div className='patientinfo_button'>
                                <button>Confirm</button>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
  
            )
        }
    }
    render()
    {
        return (
            <div className='Main_confirm_container'>
                {this.renderdata(this.state.doctor)}
            </div>
        )
    }
    componentDidMount()
    {
        const id = this.props.match.params.id
        axios.get(`${docdata}/${id}`).then(res=>this.setState({doctor:res.data}))

    }
}

export default Confirmappointment
