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
                        <h8 style={{fontWeight:'100',marginLeft:'-10px'}}>Join 125,000+ doctors</h8>
                        <Link to='/authpage/register' style={{textDecoration:'none',color:'black'}}>
                        <span style={{color:'#13bef0'}}>Are you not a doctor?</span>
                        </Link>
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