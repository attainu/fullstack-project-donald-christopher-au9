import { Component } from 'react';
import countrycode from './countrycode/countrycode'
import './Register.css'
class Register extends Component
{
    render()
    {
        return(
            <div className='Register_container'>
                    <div className='Top_header'>
                        <h5 style={{fontWeight:'400',marginLeft:'-10px'}}>Join Practo</h5>
                        <span>Are you a doctor?<span style={{color:'#ed982d'}}>Register Here</span></span>
                    </div>
                    <hr/>
                    <div className='Fullname'>
                        <span>Full Name</span>
                        <input placeholder='Full Name'/>
                    </div>
                    <div className='Mobile_Number'>
                        <span>Mobile Number</span>
                        <div className='Mobile_container'>
                        {/* <countrycode/> */}
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
                    <div className='Term'>
                        <input type='checkbox'/>
                        <div>
                        <span>Receive relevant offers and promotional communication from Practo</span>
                        </div>
                    </div>
                    <div className='send_otp_button'>
                        <button>Send otp</button>
                    </div>
            </div>
        )
    }
}
export default Register