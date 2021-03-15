import axios from "axios";
import React, { Component } from "react";
import "./Profilepage.css";
const userurl = "http://localhost:1111/user";
const editprofile = "http://localhost:1111/user/editprofile";
class Profilepage extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      city: "",
      cost: "",
      email: "",
      experience: "",
      fullname: "",
      gender: "",
      leavestatus: "",
      registered: "",
      profileimg: "",
      disable: true,
      specialisation: "",
      file: "",
    };
  }
  filehandler = (e) => {
    // console.log(e.target.files);
    this.setState({ file: e.target.files[0] });
  };
  submithandler = () => {
    const data = new FormData();
    data.append("file", this.state.file);
    axios
      .put(`${editprofile}/${this.state.user._id}`, this.state)
      .then((r) => console.log(r.data));

    // this.setState({ disable: !this.state.disable });
  };
  changehandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  disableinput = () => {
    this.setState({ disable: !this.state.disable });
  };
  renderprofile = (data) => {
    if (this.state.user) {
      return (
        <div>
          <div className="editbutton">
            <button onClick={this.disableinput}>Edit profile</button>
          </div>
          <div className="Profile_img">
            <img
              src={this.state.profileimg}
              alt="/"
              disabled={this.state.disable}
            />
            <input type="file" onChange={this.filehandler} />
          </div>
          <div className="Profile_inputs">
            <div className="profile_name_input">
              <label>Name of user</label>
              <input
                placeholder="Name Here"
                name="fullname"
                id="name_input"
                value={this.state.fullname}
                disabled={this.state.disable}
                onChange={this.changehandler}
              />
            </div>
            <div className="profile_name_input">
              <label>City</label>
              <input
                placeholder="city Here"
                name="city"
                value={this.state.city}
                disabled={this.state.disable}
                onChange={this.changehandler}
              />
            </div>
            <div className="profile_name_input">
              <label>Leave status</label>
              <div className="Status_profile">
                <select
                  name="leavestatus"
                  value={this.state.leavestatus}
                  disabled={this.state.disable}
                  onChange={this.changehandler}
                >
                  <option value="true">True</option>
                  <option value="false">false</option>
                </select>
              </div>
            </div>
            <div className="profile_name_input">
              <label>gender</label>
              <div className="Status_profile">
                <select
                  name="gender"
                  value={this.state.gender}
                  disabled={this.state.disable}
                  onChange={this.changehandler}
                >
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
              </div>
            </div>
            <div className="profile_name_input">
              <label>Cost</label>
              <input
                placeholder="Name Here"
                type="number"
                name="cost"
                value={this.state.cost}
                disabled={this.state.disable}
                onChange={this.changehandler}
              />
            </div>
            <div className="profile_name_input">
              <label>specialisation</label>
              <input
                placeholder="Name Here"
                name="specialisation"
                value={this.state.specialisation}
                disabled={this.state.disable}
                onChange={this.changehandler}
              />
            </div>
            <div className="profile_name_input">
              <label>Experienece</label>
              <select
                disabled={this.state.disable}
                name="experience"
                value={this.state.experience}
                onChange={this.changehandler}
              >
                <option value="+1">+1</option>
                <option value="+5">+5</option>
                <option value="+10">+10</option>
                <option value="+15">+15</option>
              </select>
            </div>
            <div className="profile_name_input">
              <label>Registered</label>
              <select
                name="registered"
                value={this.state.registered}
                disabled={this.state.disable}
                onChange={this.changehandler}
              >
                <option value="true">True</option>
                <option value="false">false</option>
              </select>
            </div>
            <div>
              {!this.state.disable && (
                <button onClick={this.submithandler}>Save changes</button>
              )}
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>No user</h1>;
    }
  };
  render() {
    return (
      <div className="Profile_container">
        {this.renderprofile(this.state.user)}
      </div>
    );
  }
  componentDidMount() {
    const id = sessionStorage.getItem("userid");
    axios.get(`${userurl}/${id}`).then((r) =>
      this.setState({
        user: r.data,
        city: r.data.city,
        cost: r.data.cost,
        email: r.data.email,
        experience: r.data.experience,
        fullname: r.data.fullname,
        gender: r.data.gender,
        leavestatus: r.data.leavestatus,
        registered: r.data.registered,
        profileimg: r.data.profileimg,
        specialisation: r.data.specialisation,
      })
    );
  }
}

export default Profilepage;
