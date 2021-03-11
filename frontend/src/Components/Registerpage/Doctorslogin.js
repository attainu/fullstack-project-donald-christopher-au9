import axios from 'axios';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
const registerurl ='http://localhost:1111/doctors/register'
class Register extends Component
{
    constructor()
    {
        super()
        this.state={
            fullname:'',
            experience:null,
            email:'',
            city:'',
            number:null,
            gender:'',
            registered:'',
            hospitalname:'',
            password:'',
            error:''
        }
    }
    changehandler=(e)=>
    {
        this.setState({[e.target.name]:e.target.value})
    }
    submithandler=()=>
    {
        // console.log(this.state)
        axios.post(registerurl,this.state).then(res=>this.setState({error:res.data}))
        if(this.state.error!=='')
        {
           this.props.history.push('/')
        //    console.log("valid")
        }
    }
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
                        <input placeholder='please enter full name of yours' name='fullname' value={this.state.fullname} onChange={this.changehandler}/>
                    </div>
                    <div className='Fullname'>
                        <span>Email</span>
                        <input placeholder='please enter Email of yours' name='email' value={this.state.email} onChange={this.changehandler}/>
                        <div style={{color:"red",fontSize:"24px"}}>
                        {this.state.error && this.state.error}
                        </div>
                    </div>
                    <div className='Mobile_Number'>
                        <span>Mobile Number</span>
                        <div className='Mobile_container'>
                            <select>
                                <option selected>+91(IND)</option>
                            </select>
                            <input type='number' placeholder='enter mobile numer' name='number' value={this.state.number} onChange={this.changehandler}/>
                        </div>
                    </div>
                    <div className='create_password'>
                        <span>Create Password</span>
                        <input placeholder='please enter Password' name='password' value={this.state.password} onChange={this.changehandler}/>
                    </div>
                    <div className='create_password'>
                        <span>City</span>
                        <input placeholder='please enter city' name='city' value={this.state.city} onChange={this.changehandler}/>
                    </div>
                    <div className='create_password'>
                        <span>Hospital Name</span>
                        <input placeholder='please enter hospital name' value={this.state.hospitalname} name='hospitalname' onChange={this.changehandler}/>
                    </div>
                    <div className='create_password'>
                        <span>Experience</span>
                        <select name='experience' onChange={this.changehandler} value={this.state.value}>
                            <option value="1">1</option>
                            <option value='5+'>5+</option>
                            <option value='10+'>10+</option>
                            <option value='15+'>15+</option>
                        </select>
                    </div>
                    <div className='doc_gender'>
                        <span>Gender</span>
                        <div className='abc' onChange={this.changehandler}> 
                        <input type='radio' name='gender' value='Male' /><label>Male</label>
                        <input type='radio' name='gender' value='Female' /><label>Female</label>
                        </div>
                    </div>

                    <div className='send_otp_button'>
                        <button onClick={this.submithandler}>Sign up</button>
                    </div>
            </div>
        )
    }
}
export default Register