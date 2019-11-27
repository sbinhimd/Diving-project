import React, { Component } from 'react'
// import {Table,Card,Col,Container,Row,Figure} from 'react-bootstrap'
import { Header, Table, Rating } from 'semantic-ui-react'
export default class Cart extends Component {
    // cart = JSON.parse(localStorage.getItem('cart'))
    state={
        cart : JSON.parse(localStorage.getItem('cart'))
    }
   


    Delet = (select)=> {
        const remove = this.state.cart
        const deletIndex = this.state.cart.indexOf(select);
        remove.splice(deletIndex, 1) 
          this.setState({
        cart:remove});
        console.log(this.addtocart);
        }

    render() {
        let cart = this.state.cart.map(item => 
            <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>Evidence Rating</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Rating</Table.HeaderCell>
        <Table.HeaderCell>Overview</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h2' textAlign='center'>
         <p>{item.CourseTitle}</p> 
          <img alt ="d" style={{width:"200px"}} variant="left" src={item.ImageUrl} />
          </Header>
        </Table.Cell>
        <Table.Cell singleLine>{item.Price}</Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={4} maxRating={5} />
        </Table.Cell>
        <Table.Cell  style= {{width:"25%"}} textAlign='left'>
        {item.overview}
        </Table.Cell>
        <Table.Cell>
        
        <button  onClick = {()=>this.Delet(this.state.select) }> Remove Item </button>
        </Table.Cell>
      </Table.Row>
      
    </Table.Body>
  
  </Table>
        )
       
        return (
            <div>
                 <div style={{marginTop:"200px"}}>
                 <h3 style = {{marginLeft:"0px",borderBottom:" 0.3px black solid"}}> you have {this.state.cart.length} items in cart </h3>
            {cart}
            {console.log(this.props.addtocart)}
            <div style = {{border: " 0.3px black solid ", marginTop : "20px"}} > </div>
            <button style = {{backgroundColor : "#f7f5f0" , float :"right", border:'none' , margin:"0"}}  > <p style = {{fontSize:"20px", fontFamily:"Courier New" }} > Check Out </p> <a href = "https://www.paypal.com/sa/signin "> <img src = 'https://i.ibb.co/QQX15SC/buttons2.png' target="__blank"/> </a></button>
            </div>
            </div>
        )
    }
}
