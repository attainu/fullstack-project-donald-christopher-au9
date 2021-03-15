import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./confirmappoint.css";
import { BiChevronDown } from "react-icons/bi";

class Smallnav extends Component {
  constructor() {
    super();
    this.state = {
      profiledisplay: "none",
      droplist: "",
    };
  }
  // make login button visible
  set_profile_dropdwon = () => {
    const ans = this.state.profiledisplay === "none" ? "block" : "none";
    this.setState({ profiledisplay: ans });
  };
  logouthandler = () => {
    const ans = this.state.profiledisplay === "none" ? "block" : "none";
    this.setState({ profiledisplay: ans });
    sessionStorage.removeItem("username");
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div className="confirm_nav">
          <Link to="/">
            <img
              src="https://i2.wp.com/www.cosmoderma.healios.co.in/wp-content/uploads/2019/04/practo.png?fit=1586%2C1057"
              alt="/"
            />
          </Link>
          {sessionStorage.getItem("username") && (
            <span
              onClick={this.set_profile_dropdwon}
              style={{ cursor: "pointer", display: this.state.droplist }}
            >
              {sessionStorage.getItem("username")}
              <BiChevronDown />
            </span>
          )}
          <div
            className="profile_list"
            style={{ display: this.state.profiledisplay }}
          >
            <Link
              to="/appointments"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li>Appointments</li>
            </Link>
            <li>Profile</li>

            <li onClick={this.logouthandler}>Logout</li>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    // console.log(this.props);
    if (this.props.location.pathname === "/appointments") {
      this.setState({ droplist: "none" });
    }
  }
}
export default withRouter(Smallnav);
