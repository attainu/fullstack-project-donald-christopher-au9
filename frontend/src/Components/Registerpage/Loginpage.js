import React from 'react'
import './Loginpage.css'
import {AiFillFacebook} from 'react-icons/ai'
const Loginpage = () => {
    const facebookhandler=()=>
    {
        window.location.href='http://localhost:1111/facebook/auth/facebook'
        // console.log("clicked")
    }
    return (
        <div className='Login_container'>
            <div className='Login_mobile'>
                <span>Mobile Number/Email ID</span>
                <input placeholder='Mobile Number/Email ID' />
            </div>
            <div className='Login_password'>
                <span>Password</span>
                <input placeholder='Password' />
                </div>
                <div className='Login_checked'>
                    <div>
                        <input type='checkbox' />Remeber me for 30 days
                    </div>
                        <span>Forget password?</span>
                </div>
            <div className='Login_withphone'>
                <input type='checkbox' />Login with otp instead of Password
            </div>
            <div className='loginbutton'>
                <button>Login</button>
            </div>
            <hr/>
            <div className='facebook_login'>
                <button onClick={facebookhandler}><AiFillFacebook style={{height:'30px',width:"30px"}}/>connect with facebook</button>
            </div>
        </div>
    )
}

export default Loginpage
