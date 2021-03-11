import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
class Register extends Component
{
    render()
    {
        return(
            <div className='Register_container'>
                    <div className='Top_header'>
                        <h5 style={{fontWeight:'400',marginLeft:'-10px'}}>Join Practo</h5>
                        <span style={{marginTop:'5px'}}>Are you a doctor?
                        <Link to='/authpage/doctor' style={{textDecoration:'none',color:'black'}}>
                        <span style={{color:'#ed982d'}}>Register Here</span>
                        </Link>
                        </span> 
                    </div>
                    <hr/>
                    <div className='Fullname'>
                        <span>Full Name</span>
                        <input placeholder='Full Name'/>
                    </div>
                    <div className='Mobile_Number'>
                        <span>Mobile Number</span>
                        <div className='Mobile_container'>
                            <select>
                                <option selected>+91(IND)</option>
                            </select>
                            <input placeholder='enter mobile numer'/>
                        </div>
                    </div>
                    <div className='create_password'>
                        <span>Create Password</span>
                        <input placeholder='Password'/>
                    </div>
                    <div className='create_password'>
                        <span>City</span>
                        <input placeholder='City'/>
                    </div>
                    <div className='Term'>
                        <input type='checkbox'/>
                        <div>
                        <span>Receive relevant offers and promotional communication from Practo</span>
                        </div>
                    </div>
                    <div className='send_otp_button'>
                        <button>Sign up</button>
                    </div>
            </div>
        )
    }
}
export default Register