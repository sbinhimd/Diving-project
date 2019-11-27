import React, { Component } from "react";
import { Card } from "react-bootstrap";
import './profile.css';
import jwt_decode from 'jwt-decode'
import axios from 'axios'

export default class ShowProfile extends Component {

    state = {
        first_name: '',
        last_name: '',
        email: '',
        createdAt:'',
        _id:'',
        password:''
      }

      onSubmit = (e) => { 
  
        e.preventDefault();
        console.log("on submit state",this.state)

       var obj = {
        password: this.state.password
            }
            let token = localStorage.usertoken
        axios.put(`http://localhost:5000/profile/changePassword/${token}`, obj)
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

      
    
      onchangeHanler = (e) =>{
        this.setState({[e.target.name] : e.target.value})
      }
   render() {
      
      console.log(this.state.password)
      return (
      


        <Card style={{paddingTop : "150px"}}>
        
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
                                {this.state.first_name}  {this.state.last_name}  
                          </div>
                          <form onSubmit={this.onSubmit}> 
                          <input type="password" name="password" onChange={this.onchangeHanler} placeholder="new password"/>

                          <div className="ui buttons">
<button type="reset" className="ui button">Reset</button> 
  <div className="or"></div>
  <button type="submit" className="ui positive button">Save</button>
</div>
                          </form>
                          
                      </div>
                      <div className="desc">
                      {/* {bio} */}
                      </div>
                      
                      
                      <div className="bottom">
                         
                          
                      </div>
                  </div>
      
              </div>
      
        </div>
      </Card>
     
      );
    
  }
}
