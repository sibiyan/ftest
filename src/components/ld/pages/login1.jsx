import React, { Component } from "react";
import { connect } from "react-redux";
import { authLogin } from "../../../actions/auth";
import { fetchUser } from "../../../actions/user";
import { Redirect, Link } from "react-router-dom";
// import createHistory from "history/createBrowserHistory";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Breadcrumb from "../common/breadcrumb";

class Login extends Component {
  state = {
    username: "",
    password: "",
    success: false,
    loading: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username && password) {
      this.setState({ loading: true });
      this.props.login(username, password);
      this.setState({ loading: false });
      // no error
      if (this.props.error) {
        toast.error("incorrect username or password");
      } else {
        if (this.props.token) {
          // this.props.fetchUser();
          setTimeout(() => {
            console.log("fetching user type");
            this.props.fetchUser();
          }, 3000);
        }
        toast.success("You have logged in successfully ");
      }
      // no user name and pasword filled
    } else {
      toast.error("please provide username and password");
    }
  };
  render() {
    const { error, loading, token } = this.props;
    const { username, password } = this.state;
    // console.log(this.props.token);

    if (token) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <Breadcrumb title={"Login"} />
        {this.state.loading && <div className="loading-cls"></div>}
        {/*Login section*/}
        <div className="login-page section-b-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h3>Login</h3>
                <div className="theme-card">
                  <form className="theme-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="username">User Name</label>
                      <input
                        onChange={this.handleChange}
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        name="username"
                        placeholder="username"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="review">Password</label>
                      <input
                        onChange={this.handleChange}
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter your password"
                        required=""
                        value={password}
                        name="password"
                      />
                    </div>
                    {/* <a href="#" className="btn btn-solid">
                      Login
                    </a> */}
                    <input
                      onChange={this.handleSubmit}
                      type="submit"
                      className="btn btn-solid"
                      id="submit"
                      placeholder="Submit"
                      required=""
                    />
                  </form>
                </div>
              </div>
              <div className="col-lg-6 right-login">
                <div className="theme-card authentication-right">
                  <h6 className="title-font">Forgot Password?</h6>
                  <Link className="btn btn-solid" to="/reset-password">
                    Reset password
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 right-login">
                <h3>New Customer?</h3>
                <div className="theme-card authentication-right">
                  <h6 className="title-font">Create A Account</h6>

                  <p>
                    Sign up for a free account at our store. Registration is
                    quick and easy. It allows you to order from our from the
                    port from the shops of your locality. To start shopping
                    click register. <br></br> <br></br> Local Dukans does deal
                    with shops's billing, but just a platform for small
                    localities to survive in the time of this pandemic,
                    Covid-19. For any billing or product related issues, please
                    contact the shop owners. By signing up, you agree to this
                    terms and condditions.
                  </p>

                  <Link className="btn btn-solid" to="/pages/register">
                    Reset password
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(authLogin(username, password)),
    fetchUser: () => dispatch(fetchUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

// export default Login;
