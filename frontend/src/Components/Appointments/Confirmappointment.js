import axios from "axios";
import React, { Component } from "react";
import "./confirmappoint.css";
import { Link } from "react-router-dom";
import Loginpage from "../Registerpage/Loginpage";
const docdata = "http://localhost:1111/doctors/docdata";
const addappintment = "http://localhost:1111/user/addappointment";
class Confirmappointment extends Component {
  constructor() {
    super();
    this.state = {
      doctor: "",
      doctorname: "",
      doctorid: "",
      userid: sessionStorage.getItem("userid"),
      fullname: sessionStorage.getItem("username"),
      email: sessionStorage.getItem("email"),
      patientname: "",
      confirmationmsg: "",
    };
  }
  changehandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submithandler = () => {
    // console.log(this.state)
    axios
      .put(`${addappintment}/${this.state.userid}`, this.state)
      .then((res) => {
        this.setState({ confirmationmsg: res.data.message });
        setTimeout(() => {
          this.props.history.push("/doctorlist");
        }, 2000);
      });
  };
  renderpage = (name, data) => {
    console.log(name, data);
    if (name) {
      return <li>{name}</li>;
    }
  };
  renderdata = (data) => {
    if (data) {
      return (
        <div className="confirmappoint_container">
          <div className="confirm_nav">
            <Link to="/">
              <img
                src="https://i2.wp.com/www.cosmoderma.healios.co.in/wp-content/uploads/2019/04/practo.png?fit=1586%2C1057"
                alt="/"
              />
            </Link>
            {sessionStorage.getItem("username") &&
              sessionStorage.getItem("username")}
          </div>
          <div className="confirm_container">
            <div className="confirminfo">
              <div className="confirm_top">
                <span>In-clinic Appointments</span>
              </div>
              <hr />
              <div className="confirm_dateinfo">
                <span>{data.slot[0].date}</span>
                <span>{data.slot[0].time}</span>
              </div>
              <hr />
              <div className="confirm_docinfo">
                <div className="doc_img">
                  <img src={data.profileimg} alt="/" />
                </div>
                <div className="docinfo">
                  <span>
                    <strong>{data.fullname}</strong>
                  </span>
                  <span>{data.experience}</span>
                  <span>{data.specialisation}</span>
                </div>
              </div>
              <hr />
              <div className="Hospital_info">
                <span>{data.hospitalname}</span>
              </div>
            </div>
            <div className="Confirm_details">
              {this.state.fullname && (
                <div className="confirmdetails_inputs">
                  <div className="patientinfo_top">
                    <span>Patient Details</span>
                    <p>This in-clinic appointment is for:</p>
                  </div>
                  <div>
                    <div
                      className="patient_inputs"
                      onChange={this.changehandler}
                    >
                      <input
                        type="radio"
                        name="patientname"
                        value="Alfred Richards"
                      />
                      {sessionStorage.getItem("username") && (
                        <label>{sessionStorage.getItem("username")}</label>
                      )}
                    </div>
                    <div
                      className="patient_inputs"
                      onChange={this.changehandler}
                    >
                      <input
                        type="radio"
                        name="patientname"
                        value="Someone Else"
                      />
                      <label>Someone Else</label>
                    </div>
                  </div>
                  <div className="patientinfo_top" id="provide_info">
                    <p>
                      Please provide following information about Alfred
                      Richards:
                    </p>
                  </div>
                  <div className="Patient_info_inputs">
                    <span>Full Name</span>
                    <input
                      value={this.state.fullname}
                      placeholder={this.state.fullname}
                      disabled
                    />
                  </div>
                  <div className="Patient_info_inputs">
                    <span>Email</span>
                    <input
                      value={this.state.email}
                      placeholder={this.state.email}
                      disabled
                    />
                  </div>
                  <div className="paitent_whatsapp_check">
                    <input type="checkbox" />
                    <span>Get updates in whatsapp number 8886833905</span>
                  </div>
                  <div className="patientinfo_button">
                    <button onClick={this.submithandler}>Confirm</button>
                  </div>
                </div>
              )}
              {!this.state.fullname && <Loginpage />}
            </div>
          </div>
        </div>
      );
    }
  };
  render() {
    // console.log(this.state.patientname)
    return (
      <div className="Main_confirm_container">
        {this.renderdata(this.state.doctor)}
        {this.state.confirmationmsg && (
          <div className="confirm_img">
            <img
              src="https://aogdesign.com.au/wp-content/uploads/2019/02/checkmark.gif"
              alt="/"
            />
          </div>
        )}
      </div>
    );
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`${docdata}/${id}`).then((res) =>
      this.setState({
        doctor: res.data,
        doctorid: res.data._id,
        doctorname: res.data.fullname,
      })
    );
  }
}

export default Confirmappointment;
