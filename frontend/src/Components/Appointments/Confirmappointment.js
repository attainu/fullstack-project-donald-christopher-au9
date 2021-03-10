import axios from 'axios'
import React, { Component } from 'react'
import './confirmappoint.css'
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
                        inputs
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
