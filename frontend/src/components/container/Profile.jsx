import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {}
    }
  }
  componentDidMount() {
    const token = localStorage.usertoken
    if(token){
    console.log(token)
    // if(token){
      const decoded = jwt_decode(token)
      console.log(decoded)
      this.setState(decoded.user)
    }
    // }else{
    //   window.location.href="/"
    // }
    
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default Profile