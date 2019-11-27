import React, { Component } from 'react'

import { Card, Nav} from "react-bootstrap";

import './profile.css';
import 'semantic-ui-css/semantic.min.css'
import jwt_decode from 'jwt-decode'
import {NavLink} from 'react-router-dom' 
import axios  from "axios"
import { login } from '../functionAuth/functionAuth';
//import bcrypt from 'bcrypt'


export default class EditProfile extends Component {
state = {
  first_name: '',
  last_name: '',
  email: '',
  createdAt:'',
  _id:'',
  password:''
}

onChangeHandler = (e)=>{
console.log("EditProfileHandler Run");
this.setState({
  [e.target.name] : e.target.value
})
// console.log(e.target.name)


}



onSubmit = (e) => { 
  
  e.preventDefault();
  console.log("on submit state",this.state)
  // const updatedUser = {
  //   [e.target.name] : e.target.value
  // };
//////
// bcrypt.hash(this.state.password , 10 ,(err, hash)=>{
//   this.state.password =hash

//   .then(() => console.log("Changed Successfully "))
//   .catch(err =>console.log(err))
// })

/////
 var obj = {
  first_name: this.state.first_name,
  last_name: this.state.last_name,
  email: this.state.email
      }
  axios.put(`http://localhost:5000/profile/edit/${this.state._id}`, obj)
      .then(res => {
        console.log(res.data)
      localStorage.removeItem('usertoken')
      
      
      });
  
  this.props.history.push('/profile');




}


componentDidMount(){
    let token = localStorage.usertoken
console.log("toek in Show Profile: ",token)

if(token){
  const decoded = jwt_decode(token)
  const decodedUser = decoded.user
  const decodedEmail = decoded.user.email

console.log("Decoded token ",decoded)
console.log("DecodedUser ",decodedUser)
console.log("email ",decodedEmail)


 this.setState(decodedUser)
}else{
  this.props.history.push('/login')
}
}
    
    render() {
      console.log("this is state",this.state);

      const date = this.state.createdAt.split("-")

        return (
            <Card style={{paddingTop : "150px"}}>
       <form onSubmit={this.onSubmit}>
            <div className="row">  
              <div className="col-lg-12 col-md-12 col-sm-12">
          
                      <div className="card hovercard">
                          <div className="cardheader">
          
                          </div>
                          <div className="avatar">
                              <img alt="Header"  src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"/>
                              </div>
                          <div className="info">
                              <div className="title">
                              <label>Name: </label>
                                 <input onChange={this.onChangeHandler} type="text" name="first_name" placeholder={this.state.first_name} />
                                 <input onChange={this.onChangeHandler} type="text" name="last_name" placeholder={this.state.last_name} />
                              </div>
                              
                              
                          </div>
                          <div className="desc">
                          <label>Bio: </label>
                          <input onChange={this.onChangeHandler} type="text" name="bio" placeholder="bio" />
                          </div>
                          
                          
                          <div className="bottom">
                          <label>Email: </label>
                          <input onChange={this.onChangeHandler} type="email" name="email" placeholder={this.state.email} />
                          <NavLink to="edit/changePassword"><button>Change Password</button></NavLink>
                              
                          </div>

                          
                          
                          <div className="desc">Profile Created: {date[0]}-{date[1]}</div>
                      </div>
<div className="ui buttons">
<button type="reset" className="ui button">Reset</button> 
  <div className="or"></div>
  <button type="submit" className="ui positive button">Save</button>
</div>
</div>  
            </div>
            </form>
          </Card>
        )
    }
}
