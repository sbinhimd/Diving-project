import { Button, Checkbox, Form } from 'semantic-ui-react'
import React, { Component } from 'react'
import { login }  from '../../functionAuth/functionAuth'
import { Nav } from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
export default class Register extends Component {
state ={isAdmin:false}
componentDidMount(){
    let token = localStorage.usertoken
    if(token){
      const decoded= jwt_decode(token)
      const admin = decoded.user.isAdmin
      console.log("is ",admin);
      this.setState({isAdmin:admin})
      console.log(this.state.isAdmin);
    }
}
onChangHandler=(e)=>{
    this.setState({
        [e.target.name] : e.target.value
    })
}
onSubmitHandelr = async (e)=>{
    e.preventDefault()
    localStorage.removeItem('usertoken')
   await login(this.state)

    { this.state.isAdmin ?  this.props.history.push('/admin')  :  this.props.history.push('/profile')  } }

    render() {
        console.log(this.state)
        return (
            <Form onSubmit={this.onSubmitHandelr} style={{paddingTop : "150px"}}>
            <Form.Field>
                <label>email</label>
                <input type ="email" placeholder='email' name="email" 
                 onChange ={this.onChangHandler}/>
            </Form.Field>
            <Form.Field>
                <label>password</label>
                <input type="password" placeholder='password'  name = "password"
                 onChange ={this.onChangHandler}/>
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to Terms and Conditions' />
            </Form.Field>
          <Button type='submit' >Submit</Button>
        </Form>
    )
    }
}
